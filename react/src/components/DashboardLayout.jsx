import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearSession } from '../utils/auth';
import Topbar from './Topbar';
import Button from './Button';
import Logo from './Logo';

export default function DashboardLayout({
  title,
  subtitle,
  sidebarOpen,
  setSidebarOpen,
  activeSection,
  setActiveSection,
  navItems,
  onLogout,
  children,
  notifications = [],
  showNotif,
  setShowNotif,
  userRole,
  userName
}) {
  const navigate = useNavigate();

  const defaultLogout = () => {
    clearSession();
    navigate('/');
  };

  const handleLogout = onLogout || defaultLogout;

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <Logo size="md" animated={true} variant="dark" />
          <div>
            <div className="brand-text">CSE<span>Library</span></div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, i) => {
            if (item.divider) {
              return <div key={i} className="nav-divider" />;
            }
            return (
              <button
                key={i}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
              >
                <i className={item.icon} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-card">
            <div className="user-avatar">{userName?.[0]?.toUpperCase() || 'U'}</div>
            <div className="user-meta">
              <div className="name">{userName}</div>
              <div className="role" style={{ textTransform: 'capitalize' }}>{userRole}</div>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={handleLogout}
            style={{ width: '100%', marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}
          >
            <i className="fas fa-sign-out-alt" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main">
        <Topbar
          title={title}
          subtitle={subtitle}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          actions={
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Notifications */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowNotif(!showNotif)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.2rem',
                    color: '#64748B',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => (e.target.style.color = '#3B82F6')}
                  onMouseLeave={e => (e.target.style.color = '#64748B')}
                >
                  <i className="fas fa-bell" />
                  {notifications.length > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: '#EF4444',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                    >
                      {notifications.length}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotif && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: '0.5rem',
                      width: '350px',
                      background: 'white',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-lg)',
                      zIndex: 100,
                      maxHeight: '400px',
                      overflowY: 'auto'
                    }}
                  >
                    <div style={{ padding: '1rem', borderBottom: '1px solid #E2E8F0' }}>
                      <h4 style={{ fontWeight: 700, color: '#1E293B' }}>Notifications</h4>
                    </div>
                    {notifications.length === 0 ? (
                      <div style={{ padding: '2rem', textAlign: 'center', color: '#64748B' }}>
                        No new notifications
                      </div>
                    ) : (
                      notifications.map((notif, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '1rem',
                            borderBottom: '1px solid #F1F5F9',
                            cursor: 'pointer',
                            transition: 'background 0.2s ease'
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#F8FAFC')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.25rem' }}>
                            {notif.title}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{notif.message}</div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          }
        />

        <div className="content">{children}</div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 900,
            display: 'none'
          }}
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
