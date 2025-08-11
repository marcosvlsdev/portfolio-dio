(async () => {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
     console.log(await fetching.json())
})()