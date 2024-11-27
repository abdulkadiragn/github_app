class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }

  async getGitHubData(username) {
    const userData = await (await fetch(`${this.url}${username}`)).json();
    const repoData = await (await fetch(`${this.url}${username}/repos`)).json();

    return { // kullanıldığı yere promise döner (async olarak işaretlendiği için)
      user: userData,
      repo: repoData,
    };
  }
}
