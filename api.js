function updateProfileData(data){
    const photo = document.getElementById("profile.photo")
    const name = document.getElementById("profile.name")
    const job = document.getElementById("profile.job")
    const location = document.getElementById("profile.location")
    const phone = document.getElementById("profile.phone")
    const email = document.getElementById("profile.email")
    const hardSkills = document.getElementById("hardSkills")
    const softSkills = document.getElementById("softSkills")
    const linguas = document.getElementById("linguas")
    const portfolio = document.getElementById("portfolio")

    photo.src = data.photo
    photo.alt = data.name
    name.innerText = data.name.split(" ")[0]
    job.innerText = data.job
    location.innerText = data.location
    phone.innerText = data.phone
    phone.href = `tel:${data.phone}`
    email.innerText = data.email
    email.href = `mailto:${data.email}`
    hardSkills.innerHTML = data.skills.hardSkills.map((skills) => `<li><img src="${skills.logo}" alt="${skills.name}"></li>`).join('')
    softSkills.innerHTML = data.skills.softSkills.map((skills) => `<li>${skills}</li>`).join('')
    linguas.innerHTML = data.languages.map((linguagem) => `<li>${linguagem.name} - ${linguagem.nivel}</li>`).join('')
    portfolio.innerHTML = data.portfolio.map((projeto) => `<li><h3>${projeto.name}</h3><a href="${projeto.url}">${projeto.url}}</a></li>`)
}

(async () => {
    const url = 'https://raw.githubusercontent.com/marcosvlsdev/portfolio-dio/refs/heads/main/profile.json'
    const fetching = await fetch(url)
    const fetched = await fetching.json()
    updateProfileData(fetched)
})()