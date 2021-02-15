
function App() {
  return (
    <div className="App">
			<header>
				<nav>
					<h1>Dojo-Blog</h1>

					<ul>
						<li><a href="#">Home</a></li>
						<li><a href=".hero">About</a></li>
						<li><a href="#">Login</a></li>
					</ul>
				</nav>
			</header><hr/>

			<section className="hero">
					<div className="hero_left">
					<h1>Welcome to the dojo-blog. </h1>
					</div>
					<div className="hero_right">
					<p>This is a place for the open minded people. Who wants to share their feelings and opinions, They are openly invited to do so. Please login to write anything for the dojo-blog. Actually this is my practice of learning React JS. Thank you for visiting my blog</p>
					<a className="login" href="">Login</a>
					</div>
			</section>
    </div>
  );
}

export default App;