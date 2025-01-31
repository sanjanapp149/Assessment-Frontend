import './styles/App.css';
import React from 'react';
import { MoreHorizontal, Paperclip, MessageSquare, Bell, Search, Plus, PhoneCall, FileText ,ArrowRight} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <button className="menu-button">
          <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </button>
      </div>
      <div className="sidebar-items">
        <button className="sidebar-item">
          <Search size={20} />
        </button>
        <button className="sidebar-item">
          <FileText size={20} />
        </button>
        <button className="sidebar-item">
          <ArrowRight size={20} />
        </button>
        <button className="sidebar-item">
          <PhoneCall size={20} />
        </button>
      </div>
    </div>
  );
};

const TenderBoard = () => {
  const columns = [
    {
      title: "To - Do List",
      count: 4,
      status: "todo",
      items: [
        {
          status: "In Progress",
          statusType: "in-progress",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        },
        {
          status: "Not Started",
          statusType: "not-started",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "High",
          comments: 12,
          attachments: 3
        },
        {
          status: "In Progress",
          statusType: "in-progress",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        }
      ]
    },
    {
      title: "In Progress",
      count: 4,
      status: "in-progress",
      items: [
        {
          status: "In Progress",
          statusType: "in-progress",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        },
        {
          status: "In Progress",
          statusType: "in-progress",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        },
        {
          status: "In Progress",
          statusType: "in-progress",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        }
      ]
    },
    {
      title: "Not Started",
      count: 4,
      status: "not-started",
      items: [
        {
          status: "Not Started",
          statusType: "not-started",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        },
        {
          status: "Not Started",
          statusType: "not-started",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        },
        {
          status: "Not Started",
          statusType: "not-started",
          title: "Construction Tender 1",
          description: "Description goes in here about the tender",
          date: "22 Dec 24",
          priority: "Low",
          comments: 12,
          attachments: 3
        }
      ]
    }
  ];

  return (
    <div className="main-container">
      <Sidebar />
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">Tender Tasks</h1>
          <div className="header-controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for Tenders"
                className="search-input"
              />
              <Search className="search-icon" />
            </div>
            <div className="notification-badge">
              <Bell className="notification-icon" />
            </div>
            <div className="user-avatar">S</div>
          </div>
        </header>

        {/* View Controls */}
        <div className="view-controls">
          <button className="view-button">List View</button>
          <button className="view-button active">Board View</button>
          <div className="view-controls-spacer"></div>
          <button className="view-button action">View Tender Details</button>
          <button className="view-button">Columns</button>
        </div>

        {/* Board Layout */}
        <div className="board-container">
          {columns.map((column, index) => (
            <div key={index} className="board-column">
              <div className="column-header">
                <div className="column-title">
                  <div className={`status-indicator ${column.status}`}></div>
                  <span>{column.title}</span>
                  <span className="column-count">{column.count}</span>
                </div>
                <div className="column-actions">
                  <button className="action-button">
                    <Plus className="action-icon" />
                  </button>
                  <button className="action-button">
                    <MoreHorizontal className="action-icon" />
                  </button>
                </div>
              </div>

              <div className="column-content">
                {column.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="tender-card">
                    <div className="card-header">
                      <div className="card-status">
                        <div className={`status-indicator ${item.statusType}`}></div>
                        <span>{item.status}</span>
                      </div>
                      <button className="action-button">
                        <MoreHorizontal className="action-icon" />
                      </button>
                    </div>
                    
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                    
                    <div className="card-assignee">
                      <span>Assignee</span>
                      <div className="assignee-avatar"></div>
                    </div>
                    
                    <div className="card-metadata">
                      <span className="metadata-left">{item.date}</span>
                      <div className="metadata-right">
                        <span className={`priority-tag ${item.priority.toLowerCase()}`}>
                          {item.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-actions">
                      <div className="action-item">
                        <MessageSquare className="action-icon" />
                        <span>{item.comments} Comments</span>
                      </div>
                      <div className="action-item">
                        <Paperclip className="action-icon" />
                        <span>{item.attachments} Attachments</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenderBoard;