import styles from "./VisitorsLog.module.css";
import { useRef, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function VisitorsLog({ onClose }) {
  const messagesRef = useRef(null);
  const textareaRef = useRef(null);
  const [name, setName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("visitors_log")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    console.log(data);
    setMessages(data);
  }

  async function addMessage() {
    if (!name.trim() || !messageText.trim()) {
      return;
    }

    const { error } = await supabase.from("visitors_log").insert([
      {
        name: name,
        msg: messageText,
      },
    ]);

    if (error) {
      console.error(error);
      return;
    }

    setName("");
    setMessageText("");

    fetchMessages();
  }

  // Fetch once
  useEffect(() => {
    fetchMessages();
  }, []);

  // Adjust textarea height whenever messageText changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [messageText]);

  // Scroll whenever messages change
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

// REAL-TIME UPDATES
  useEffect(() => {
  const channel = supabase
    .channel("visitors_log_changes")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "visitors_log",
      },
      () => {
        fetchMessages();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);

  return (
    <div className={styles.visitorsLog}>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>

      <div ref={messagesRef} className={styles.messages}>
        {messages.map((msg) => (
          <div key={msg.id} className={styles.message}>
            <span className={styles.name}>{msg.name}</span>
            <span className={styles.text}>{msg.msg}</span>
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input
          className={styles.nameInput}
          placeholder="name"
          maxLength={25}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className={styles.messageRow}>
          <textarea
            value={messageText}
            ref={textareaRef}
            className={styles.messageInput}
            placeholder="message"
            maxLength={100}
            onInput={(e) => {
              setMessageText(e.target.value);
            }}
          />

          <div className={styles.sendArea}>
            <button
              className={styles.sendButton}
              title="Post"
              onClick={addMessage}
            >
              ►
            </button>

            <div className={styles.charCount}>{messageText.length} / 100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
