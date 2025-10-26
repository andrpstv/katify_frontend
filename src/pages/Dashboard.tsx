import React from "react";
import Header from "../components/Header";
import ProjectForm from "../components/ProjectForm";

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Header />
      <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '32px' }}>
          <h1 style={{ color: 'var(--text)', marginBottom: '16px' }}>Добро пожаловать в Katify Analytics</h1>
          <p style={{ color: 'var(--subtext0)' }}>Создавайте проекты, связывая AmoCRM и GetCourse для получения аналитики.</p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <ProjectForm />
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div className="card">
            <h3 style={{ color: 'var(--text)' }}>Аналитика AmoCRM</h3>
            <p style={{ color: 'var(--subtext0)' }}>Здесь будет отображаться аналитика из AmoCRM.</p>
            {/* Placeholder for charts or data */}
            <div style={{ height: '200px', background: 'var(--surface0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              График AmoCRM
            </div>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--text)' }}>Аналитика GetCourse</h3>
            <p style={{ color: 'var(--subtext0)' }}>Здесь будет отображаться аналитика из GetCourse.</p>
            {/* Placeholder for charts or data */}
            <div style={{ height: '200px', background: 'var(--surface0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              График GetCourse
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
