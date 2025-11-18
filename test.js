function main() {
    if (location.hostname.includes("spotify.com")) {

        let observerSpotify = new MutationObserver(() => {
            const title = document.querySelector('span[data-testid="entityTitle"] h1')?.textContent;
            const artist = document.querySelector('a[data-testid="creator-link"]')?.textContent;
            if (title && artist) {
                observerSpotify.disconnect();
                const url = "https://music.youtube.com/search?q=" + encodeURIComponent(title + " " + artist);
                window.location.href = url;
            }
        });

        observerSpotify.observe(document.body, { childList: true, subtree: true });
    }

    if (location.hostname.includes("music.youtube.com")) {
        const link = document.querySelector('div.main-card-container.style-scope.ytmusic-card-shelf-renderer a[spellcheck="false"]');
        link?.click();
    }
}

main();