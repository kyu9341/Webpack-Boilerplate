class App {
  public root: HTMLDivElement;

  constructor(root) {
    this.root = root;

    this.render();
  }

  render() {
    this.root.innerHTML = `
    <h1> Hello World! </h1>
    `;
  }
}

export default App;
