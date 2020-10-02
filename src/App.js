class App {
  constructor($root) {
    this.$root = $root;

    this.render();
  }

  async render() {
    this.$root.innerHTML = `
    <h1> Hello World! </h1>
    `;
  }
}

export default App;
