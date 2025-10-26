import React, { useState } from "react";
import Input from "./Input";

export default function ProjectForm() {
  const [amoProject, setAmoProject] = useState("");
  const [getCourseAccount, setGetCourseAccount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In real app, send to backend
    alert(`Project created: AmoCRM - ${amoProject}, GetCourse - ${getCourseAccount}`);
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ color: 'var(--text)', marginBottom: '16px' }}>Создать проект</h3>
      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Проект в AmoCRM"
          type="text"
          value={amoProject}
          onChange={(e) => setAmoProject(e.target.value)}
          placeholder="Введите ID или название проекта AmoCRM"
          required
        />
        <Input
          label="Аккаунт GetCourse"
          type="text"
          value={getCourseAccount}
          onChange={(e) => setGetCourseAccount(e.target.value)}
          placeholder="Введите аккаунт GetCourse"
          required
        />
        <button className="btn" type="submit" style={{ background: 'var(--accent1)', color: 'var(--crust)' }}>
          Создать проект
        </button>
      </form>
    </div>
  );
}
