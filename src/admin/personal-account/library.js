let bookmarks = Array.from(document.getElementsByClassName('bookmark'));

bookmarks.forEach(bookmark => {
	bookmark.addEventListener('click', (e) => {
		console.log(e);
		bookmark.toggleAttribute('active')
	});
});