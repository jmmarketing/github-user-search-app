class resultCardView {
  _resultCard = document.querySelector(".result-card");

  _formatJoinedDate(time) {
    const date = new Date(time);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  _compileAvatar(data) {
    return `<img src="${data["avatar_url"]}" class="result-card__avatar" />`;
  }

  _compileTitle(data) {
    const joinDate = this._formatJoinedDate(data["created_at"]);
    return `
          <div class="result-card__dev-title">
                <div class="result-card__dev-title--name">
                  <h1>${data.name ? data.name : data.login}</h1>
                  <p>@${data.login}</p>
                </div>
                <p class="result-card__dev-title--date">Joined ${joinDate}</p>
          </div>
        `;
  }

  _compileAbout(data) {
    return `
          <p class="result-card__dev-about ${!data.bio ? "no-bio" : ""}">
            ${data.bio ?? "This profile has no bio"}
          </p>
        `;
  }

  _compileStats(data) {
    return `
          <div class="result-card__dev-stats">
             <div class="result-card__dev-stats-group">
                <h4 class="result-card__dev-stats--title">Repos</h4>
                <h2 class="result-card__dev-stats--number">${data["public_repos"]}</h2>
              </div>
           <div class="result-card__dev-stats-group">
              <h4 class="result-card__dev-stats--title">Followers</h4>
              <h2 class="result-card__dev-stats--number">${data.followers}</h2>
            </div>
            <div class="result-card__dev-stats-group">
               <h4 class="result-card__dev-stats--title">Following</h4>
               <h2 class="result-card__dev-stats--number">${data.following}</h2>
            </div>
          </div>
        `;
  }

  _compileLinks(data) {
    //blog scenarios :
    // - bare url (jmmarketing.com)
    // - http:// (https://jm.com)
    // - www. (www.jm.com)

    const cleanBlog = data.blog.replaceAll(/(https:\/\/|http:\/\/|www\.)/g, "");

    return `
        <div class="result-card__dev-links">
            <div class="result-card__dev-links--left">
              <p class="result-card__dev-links--location has-icon ${
                !data.location ? "not-active" : ""
              }">${data.location ?? "Not Available"}</p>
              <a href="${!data.blog ? "#" : "http://" + cleanBlog}"
                  class="result-card__dev-links--site has-icon ${
                    !data.blog ? "not-active" : ""
                  }" target="_blank">${!data.blog ? "Not Available" : cleanBlog}
              </a>
            </div>
              <div class="result-card__dev-links--right">
                <a href="https://twitter.com/${
                  data["twitter_username"] ?? ""
                }" class="result-card__dev-links--twitter has-icon 
                 ${!data["twitter_username"] ? "not-active" : ""}">
                 ${data["twitter_username"] ?? "Not Available"}
                 </a>
                <a href="${
                  data["html_url"]
                }" class="result-card__dev-links--github has-icon">
                @${data.login}</a>
            </div>
        </div>
        `;
  }

  renderUserData(data) {
    const avatar = this._compileAvatar(data);
    const title = this._compileTitle(data);
    const about = this._compileAbout(data);
    const stats = this._compileStats(data);
    const links = this._compileLinks(data);

    const compiledHTML = `
          ${avatar}
          <div class="result-card__info">
           ${title}
           ${about}    
           ${stats} 
           ${links}
          </div>
        `;

    // console.log(compiledHTML);
    // resultCard.shadowRoot.innerHTML = compiledHTML;
    this._resultCard.innerHTML = "";
    this._resultCard.insertAdjacentHTML("beforeend", compiledHTML);
  }
}

export default new resultCardView();
