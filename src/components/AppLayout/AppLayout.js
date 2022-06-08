import './AppLayout.scss';

const AppLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Todo List</h1>
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
