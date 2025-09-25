const renderEvent = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/events')
    const data = await response.json()

    const eventContent = document.getElementById('event-content')

    let event
    event = data.find(event => event.id === requestedID)

    if (event) {

        document.getElementById('image').src = event.image
        document.getElementById('name').textContent = event.name
        document.getElementById('artists').textContent = 'Artists Invited: ' + event.artists
        document.getElementById('date').textContent = 'Date: ' + event.date
        document.getElementById('time').textContent = 'Time: ' + event.time
        document.getElementById('price').textContent = 'Price: ' + event.price
        document.getElementById('address').textContent = 'Address: ' + event.address
        document.title = `Discover EDM - ${event.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Events Available 😞'
        eventContent.appendChild(message)
    }

}

renderEvent()