const renderEvents = async () => {
    const response = await fetch('/events')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(event => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${event.image})`

            const name = document.createElement('h3')
            name.textContent = event.name
            bottomContainer.appendChild(name)

            const artists = document.createElement('p')
            artists.textContent = `Artists: ${event.artists.join(', ')}`
            bottomContainer.appendChild(artists)

            const date = document.createElement('p')
            date.textContent = `Date: ${event.date}`
            bottomContainer.appendChild(date)

            const time = document.createElement('p')
            time.textContent = `Time: ${event.time}`
            bottomContainer.appendChild(time)

            const address = document.createElement('p')
            address.textContent = `Address: ${event.address}`
            bottomContainer.appendChild(address)

            const price = document.createElement('p')
            price.textContent = `Price: ${event.price}`
            bottomContainer.appendChild(price)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/events/${event.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Events Available 😞'
        mainContent.appendChild(message)
    }
}

renderEvents()