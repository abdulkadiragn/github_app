const githubName = document.querySelector("#githubName");
const searchForm = document.querySelector("#searchForm");
const clearBtn = document.querySelector("#clearbtn");
const clearAllBtn = document.querySelector("#celearAll");
const github = new Github();
const ui = new UI();

runEventListeners();

function runEventListeners() {
  searchForm.addEventListener("submit", search);
  clearBtn.addEventListener("click", clearInput);
  document.addEventListener("DOMContentLoaded", runPageLoaded);
  clearAllBtn.addEventListener("click", clearSearchedUser);
}

function clearSearchedUser() {
  StorageX.clearAllSearhedUserFromStorage();
  ui.clearSearchedUsers();

}

function runPageLoaded() {
  ui.FillUItoStorage();
}

function clearInput() {
  ui.clearInput();
}

function search(e) {
  const userName = githubName.value.trim();
  if (userName == null || userName == "") {
    alert("Lütfen bir kullanıcı adı giriniz");
  } else {
    github
      .getGitHubData(userName)
      .then((response) => {
        ui.addSearchedUserToUI(userName);
        StorageX.addSearchUsertoStorage(userName);
        ui.addUserProfileUI(response.user);
        document
          .querySelector("#showRepo")
          .addEventListener("click", () => ui.showRepos(response.repo));
      })
      .catch((err) => console.log(err));
  }
  e.preventDefault();
}
