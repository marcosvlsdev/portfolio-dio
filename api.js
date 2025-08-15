function updateProfileData(fetch){
    const photo = document.getElementById("profile.photo")
    photo.src = fetch.photo
    photo.alt = fetch.name
}

(async () => {
    const url = 'https://raw.githubusercontent.com/marcosvlsdev/portfolio-dio/refs/heads/main/profile.json'
    const fetching = await fetch(url)
    const fetched = await fetching.json()
    updateProfileData(fetched)
})()