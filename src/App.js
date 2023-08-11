import './App.css';

function App() {
  const title = "welcome to the new blog";
  const likes = 20;
  const link = "https://stackoverflow.com/questions/24114676/git-error-failed-to-push-some-refs-to-remote";

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <p>{title}</p>

        <p>Liked {likes} times</p>
        <a href={link}>facebook</a>
      </div>
    </div>
  );
}

export default App;
