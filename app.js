//Init Github
const github = new GitHub

//Init UI
const ui = new UI

//Search Input
const searchUser = document.querySelector('#searchUser')
searchUser.addEventListener('keyup', getInput)

function getInput(e) {
  const userText = e.target.value

  if (userText !== '') {
    github.getUser(userText)
    .then(data => {
      if (data.profileData.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        // show profile
        ui.showProfile(data.profileData)
        ui.showRepos(data.repos)
      }
    })
  }
  else{
      ui.clearProfile()
  }
  
}