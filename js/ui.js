class UI {
  constructor() {
    this.profileContentElement = document.querySelector("#profil-Content");
    this.githubNameInput = document.querySelector("#githubName");
    this.tableContent = document.querySelector("#tableContent");
    this.table = document.querySelector("#table-main");
    this.searchUser = document.querySelector("#searchUserList");
    this.isShowRepo = true;
  }

  FillUItoStorage() {
    const users = StorageX.getSearchedUserFromStorage();
    if (users != null && users.length > 0) {
      users.forEach((user) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = user;
        this.searchUser.appendChild(li);
      });
    }
  }

  addSearchedUserToUI(username) {
    //<li class="list-group-item">Enes</li>
    if (StorageX.checkUser(username)) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = username;
      this.searchUser.appendChild(li); //ul içerisine oluşturulan li'yi ekleyebilmek için
    }
  }

  addUserProfileUI(user) {
    this.profileContentElement.innerHTML = `
     <div class="col-sm-12 col-md-4 col-lg-4">
                <div id="profile-Div">
                    <img id="profil-Img"  src="${user.avatar_url}" width="200">
                    <hr style="border: 1px solid lightgray; width: 300px;">
                    <span>${user.name}</span>
                </div>
            </div>
            <div class="col-sm-12 col-md-8 col-lg-8">
                <div id="badge-Div" class="mt-2">
                    <button type="button" class="btn btn-primary btn-sm">
                        Takipçi <span class="badge badge-light">${
                          user.followers
                        }</span>
                      </button>
                      <button type="button" class="btn btn-secondary btn-sm">
                        Takip Edilen <span class="badge badge-light">${
                          user.following
                        }</span>
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Repolar <span class="badge badge-light">${
                          user.public_repos
                        }</span>
                      </button>
                </div>
                <div id="info-div" class="mt-3">
                    <div class="info">
                        <img src="images/profile-icon.jpg" width="40" height="40" alt="">
                        <span>${user.company == null ? "" : user.company}</span>
                    </div>
                    <div class="info">
                        <img src="images/location.png" width="40" height="40" alt="">
                        <span>${
                          user.location == null ? "" : user.location
                        }</span>
                    </div>
                    <div class="info">
                        <img src="images/mail.png" width="40" height="40" alt="">
                        <span>${user.email == null ? "" : user.email}</span>
                    </div>
                    <div class="info">
                        <a id="showRepo" href="#">Repoları Göster</a>
                    </div>
                </div>
            </div>
     `;
  }
  debugger;
  checkMessege() {
    const showRepoLink = document.querySelector("#showRepo");
    if (this.isShowRepo) {
      showRepoLink.textContent = "Repoları Göster";
    } else {
      showRepoLink.textContent = "Repoları Kapat";
    }
  }

  showRepos(repos) {
    if (this.isShowRepo) {
      if (repos != null && repos.length > 0) {
        let sayac = 1;
        repos.forEach((repo) => {
          this.tableContent.innerHTML += `
                    <tr>
                          <th scope="row">${sayac}</th>
                          <td>${repo.name}</td>
                          <td>${repo.created_at}</td>
                        </tr>
                  `;
          sayac++;
        });
      }
      this.isShowRepo = false;
      this.checkMessege();
    } else {
      this.isShowRepo = true;
      this.checkMessege();
      this.table.innerHTML = "";
    }
  }
  clearSearchedUsers() {
    this.searchUser.innerHTML = "";
  }
  clearInput() {
    this.githubNameInput.value = "";
    this.profileContentElement.innerHTML = "";
    this.tableContent.innerHTML = "";
  }
}
