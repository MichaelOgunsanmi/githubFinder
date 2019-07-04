class GitHub {
  constructor() {
    this.client_id = '14ddcc05e3de34699c6c'
    this.client_secret = '00b507d57187cc4761a415d37863d5d33b88297e'
    this.repos_count = 10
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page= ${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profileData = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profileData,
      repos
    }
  }
}