window.addEventListener('load', () => {

    const query = new URL(window.location)
    //console.warn("query = ", query)
    const background = query.searchParams.get('q') || 'white'
    //console.warn("query.searchParams.get('q') = ", query.searchParams.get('q'))
    document.body.style.backgroundColor = background

})
