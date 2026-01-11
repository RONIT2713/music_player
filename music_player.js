const AUDIO_BASE = "https://pub-c13eefd6fac7430e90731ec00e6f6069.r2.dev/";
const COVER_BASE = "https://pub-c13eefd6fac7430e90731ec00e6f6069.r2.dev/";

function resolveAudio(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return AUDIO_BASE + path;
}

function resolveCover(path) {
    if (!path) return COVER_BASE + "covers/default.jpg";
    if (path.startsWith("http")) return path;
    return COVER_BASE + path;
}

// --- 1. GET HTML ELEMENTS ---
const songListElement = document.getElementById('song-list');
const audioPlayer = document.getElementById('audio-element');
audioPlayer.preload = 'auto';


const viewTitleElement = document.getElementById('current-view-title');

const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');

const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const controls = document.getElementById('controls');

const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

const searchBar = document.getElementById('search-bar');

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const sidebar = document.getElementById('sidebar');
const themeToggleBtn = document.getElementById('theme-toggle');

const miniCover = document.getElementById('mini-cover');

// Batch 5 cache
const fullPlaylistEl = document.getElementById('full-playlist');
const fullPlaylistContainer = document.getElementById('full-playlist-container');
const fullTabsRow = document.getElementById('full-tabs-row');


// Now Playing queue
const nowPlayingListElement = document.getElementById('now-playing-list');
const nowPlayingPanel = document.getElementById('now-playing-panel');


const clearFavoritesBtn = document.getElementById('clear-favorites-btn');

// Full-screen animated player elements
let openPlayerIcon = document.getElementById('open-player-icon');
let closePlayerBtn = document.getElementById('close-player-btn');
let animatedPlayerOverlay = document.getElementById('animated-player-overlay');
let spinningDisc = document.getElementById('spinning-disc');
const animatedTitle = document.getElementById('animated-title');
const animatedArtist = document.getElementById('animated-artist');

// Full-screen player controls
const fullProgressBar = document.getElementById('full-progress-bar');
const fullPlayPauseBtn = document.getElementById('full-play-pause-btn');
const fullPrevBtn = document.getElementById('full-prev-btn');
const fullNextBtn = document.getElementById('full-next-btn');
const fullDurationDisplay = document.getElementById('full-duration');


// FULL PLAYER ICONS

const fullPlayIcon = document.querySelector('#full-play-pause-btn i');
const fullVolumeIcon = document.getElementById('full-volume-icon');


// New full-player extras
let fullPlayerCover = document.getElementById('full-player-cover');
let fullTabButtons = document.querySelectorAll('.full-tab-btn');

let fullVolumeBar = document.getElementById('full-volume-bar');


// Category modal elements
const categoryModal = document.getElementById('category-modal');
const categoryModalBody = document.getElementById('category-modal-body');
const categoryModalClose = document.getElementById('category-modal-close');
const categoryModalTitle = document.getElementById('category-modal-title');
const viewAllCategoriesBtn = document.getElementById('view-all-categories-btn');

// Confirmation modal (for clear favorites + downloads)
const confirmModal = document.getElementById('confirm-modal');
const confirmModalTitle = document.getElementById('confirm-modal-title');
const confirmModalMessage = document.getElementById('confirm-modal-message');
const confirmModalCancel = document.getElementById('confirm-modal-cancel');
const confirmModalOk = document.getElementById('confirm-modal-ok');

let pendingConfirmAction = null; // function to run after user confirms

// Top-right main view toggle
let mainViewButtons; // will be set in initApp
let currentMainView = 'songs'; // 'songs' | 'albums' | 'artists'

// Full player state
let currentFullCategory = 'All';

let deferredInstallPrompt = null;



const mainHeaderRow = document.getElementById('main-header-row');
const searchToggleBtn = document.getElementById('search-toggle-btn');

// --- DOM CACHE (Batch 2 optimization) ---
const DOM = {
    body: document.body,
    header: mainHeaderRow,
    sidebar: sidebar,
    songList: songListElement,
    queue: nowPlayingListElement,
    audio: audioPlayer
};


// --- UI PORTAL HELPERS ---
const uiPortal = document.getElementById('ui-portal');

function mountToPortal(el) {
    if (!el || !uiPortal) return;
    if (!uiPortal.contains(el)) {
        uiPortal.appendChild(el);
    }
}

function unmountFromPortal(el) {
    if (!el || !el.parentElement) return;
    el.remove();
}



function isDisclaimerOpen() {
    const overlay = document.getElementById('disclaimer-overlay');
    return overlay && !overlay.classList.contains('disclaimer-hidden');
}


window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
});





// --- 2. STATE ---
// --- NAVIGATION STATE (for mobile back button) ---


let isPreviewSeeking = false;

let currentSongs = [];
let currentlyPlayingIndex = -1;
let currentSongId = null;
let currentFilter = { type: 'view', value: 'playlist' }; // 'view' | 'category' | 'artist'

let userQueue = []; // song IDs to play next
let shuffleOn = false;
let repeatMode = 'off'; // 'off' | 'all' | 'one'

let categoryModalView = 'grid'; // 'grid' | 'songs'

// Categories for modal (includes Haryanavi & Bhojpuri)
const CATEGORY_CONFIG = [
    { key: 'All',       label: 'All',               icon: 'fa-th-large' },
    { key: 'Hindi',     label: 'Hindi',             icon: 'fa-music' },
    { key: 'English',   label: 'English',           icon: 'fa-globe' },
    { key: 'Punjabi',   label: 'Punjabi',           icon: 'fa-drum' },
    { key: 'Haryanavi', label: 'Haryanavi',         icon: 'fa-drum-steelpan' },
    { key: 'Bhojpuri',  label: 'Bhojpuri',          icon: 'fa-microphone-alt' },
];

// --- 3. HELPER FUNCTIONS ---
function formatTime(seconds) {
    if (!isFinite(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function shuffleArrayOnce(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function setActiveFilterClass() {
    document.querySelectorAll('#sidebar button, #artists-list li').forEach(el => {
        el.classList.remove('active-filter');
    });

    let selector = '';

    if (currentFilter.type === 'view') {
        selector = `#main-nav button[data-view="${currentFilter.value}"]`;
    } else if (currentFilter.type === 'category') {
        selector = `#categories-list button[data-category="${currentFilter.value}"]`;
    } else if (currentFilter.type === 'artist') {
        selector = `#artists-list li[data-artist="${currentFilter.value}"]`;
    }

    if (selector) {
        const activeElement = document.querySelector(selector);
        if (activeElement) {
            activeElement.classList.add('active-filter');
        }
    }
}

// theme helpers
function updateThemeToggleIcon() {
    if (!themeToggleBtn) return;
    const theme = document.body.dataset.theme || 'dark';
    if (theme === 'light') {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function applyStoredTheme() {
    const stored = localStorage.getItem('musicPlayerTheme');
    if (stored === 'light' || stored === 'dark') {
        document.body.dataset.theme = stored;
    } else {
        document.body.dataset.theme = 'dark';
    }
    updateThemeToggleIcon();
}

// Simple stub – you can later implement color extraction if you want
function applyAccentFromImage(imgEl, cardEl) {
    // For now, do nothing. CSS uses default accent color.
}
function updateVolumeIcon() {

    if (!fullVolumeIcon) return;

    const v = audioPlayer.volume;

    if (audioPlayer.muted || v === 0) {
        fullVolumeIcon.className = 'fas fa-volume-xmark';
    }
    else if (v < 0.5) {
        fullVolumeIcon.className = 'fas fa-volume-low';
    }
    else {
        fullVolumeIcon.className = 'fas fa-volume-high';
    }
}



// --- 4. DATA MANAGEMENT (Local Storage Functions) ---
function saveSongsToStorage() {
    try {
        localStorage.setItem('myMusicPlayerSongs', JSON.stringify(currentSongs));
    } catch (e) {
        console.warn('Failed to save songs to storage', e);
    }
}

/*
    loadSongsFromStorage MERGES by id (preserve isFavorite, user fields, keep stored-only songs)
*/
function loadSongsFromStorage() {
    const storedDataRaw = localStorage.getItem('myMusicPlayerSongs');
    let storedData = null;
    try {
        storedData = storedDataRaw ? JSON.parse(storedDataRaw) : null;
    } catch (e) {
        console.warn('Corrupt stored song data — clearing.', e);
        localStorage.removeItem('myMusicPlayerSongs');
        storedData = null;
    }

    if (typeof INITIAL_SONG_DATA === 'undefined' || !Array.isArray(INITIAL_SONG_DATA)) {
        console.warn('INITIAL_SONG_DATA not found — using stored library or empty library.');
        if (storedData && Array.isArray(storedData)) {
            currentSongs = storedData;
        } else {
            currentSongs = [];
        }
        saveSongsToStorage();
        return;
    }

    const initialById = new Map(INITIAL_SONG_DATA.map(s => [s.id, Object.assign({}, s)]));
    const merged = [];

    INITIAL_SONG_DATA.forEach(initSong => {
        const storedMatch = (storedData && Array.isArray(storedData))
            ? storedData.find(s => s.id === initSong.id)
            : null;

        const mergedSong = Object.assign({}, initSong);

        if (storedMatch && typeof storedMatch === 'object') {
            if (typeof storedMatch.isFavorite !== 'undefined') mergedSong.isFavorite = !!storedMatch.isFavorite;
            if (typeof storedMatch.customTags !== 'undefined') mergedSong.customTags = storedMatch.customTags;
            Object.keys(storedMatch).forEach(k => {
                if (!['id','title','artist','filePath','coverPath','category'].includes(k) && typeof mergedSong[k] === 'undefined') {
                    mergedSong[k] = storedMatch[k];
                }
            });
        } else {
            if (typeof mergedSong.isFavorite === 'undefined') mergedSong.isFavorite = false;
        }

        merged.push(mergedSong);
    });

    if (storedData && Array.isArray(storedData)) {
        storedData.forEach(s => {
            if (!initialById.has(s.id)) {
                merged.push(s);
            }
        });
    }

    currentSongs = merged;
    saveSongsToStorage();
}

// Persist/load userQueue
function saveQueueToStorage() {
    try {
        localStorage.setItem('musicPlayerQueue', JSON.stringify(userQueue || []));
    } catch (e) {
        console.warn('Failed to save queue to storage', e);
    }
}
function loadQueueFromStorage() {
    try {
        const raw = localStorage.getItem('musicPlayerQueue');
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) userQueue = parsed;
    } catch (e) {
        console.warn('Failed to load queue from storage', e);
    }
}

// --- FEATURE 5: PLAYER STATE STORAGE ---
function savePlayerState() {
    try {
        if (currentSongId) {
            localStorage.setItem('musicPlayer_lastSong', currentSongId);
        }

        localStorage.setItem('musicPlayer_volume', audioPlayer.volume);
        localStorage.setItem('musicPlayer_shuffle', shuffleOn);

        // 🔥 FIXED REPEAT STORAGE
        if (repeatMode === 'off') {
            localStorage.removeItem('musicPlayer_repeat');
        } else {
            localStorage.setItem('musicPlayer_repeat', repeatMode);
        }

    } catch (e) {
        console.warn('Failed to save player state', e);
    }
}


function loadPlayerState() {
    try {
        const lastSong = localStorage.getItem('musicPlayer_lastSong');
        const vol = localStorage.getItem('musicPlayer_volume');
        const shuf = localStorage.getItem('musicPlayer_shuffle');
        const rep = localStorage.getItem('musicPlayer_repeat');

        /* ---------- VOLUME ---------- */
        if (vol !== null) {
            audioPlayer.volume = parseFloat(vol);
            if (volumeBar) volumeBar.value = audioPlayer.volume * 100;
            if (fullVolumeBar) fullVolumeBar.value = volumeBar.value;
        }

        /* ---------- SHUFFLE ---------- */
        if (shuf !== null) {
            shuffleOn = shuf === 'true';
            shuffleBtn?.classList.toggle('control-active', shuffleOn);
        }

        /* ---------- REPEAT (FIXED) ---------- */
        repeatMode = 'off'; // DEFAULT

        if (repeatBtn) {
            repeatBtn.classList.remove('control-active', 'repeat-one');
        }

        if (rep === 'all') {
            repeatMode = 'all';
            repeatBtn.classList.add('control-active');
        }
        else if (rep === 'one') {
            repeatMode = 'one';
            repeatBtn.classList.add('control-active', 'repeat-one');
        }

        /* ---------- RESTORE LAST SONG (NO AUTOPLAY) ---------- */
        if (lastSong) {
            const song = currentSongs.find(s => s.id == lastSong);
            if (song) {

                currentSongId = song.id;

                audioPlayer.src = resolveAudio(song.filePath);
                audioPlayer.load(); // metadata only

                // RESET UI
                if (progressBar) progressBar.value = 0;
                if (fullProgressBar) fullProgressBar.value = 0;

                if (currentTimeDisplay)
                    currentTimeDisplay.textContent = "0:00";

                const fullTimeEl = document.getElementById('full-current-time');
                if (fullTimeEl)
                    fullTimeEl.textContent = "0:00";

                if (playerTitle) playerTitle.textContent = song.title;
                if (playerArtist) playerArtist.textContent = song.artist;

                if (miniCover) {
                    miniCover.src = resolveCover(song.coverPath);
                    miniCover.classList.remove('hidden');
                }

                if (fullPlayerCover) {
                    fullPlayerCover.src = resolveCover(song.coverPath);
                }

                syncFullPlayerState();
            }
        }

    } catch (e) {
        console.warn('Failed to load player state', e);
    }
}



// --- 5. FULL-PLAYER STATE & SYNC ---
function syncFullPlayerState() {

    if (!audioPlayer) return;

    /* ---------- PLAY ICON ---------- */
    if (audioPlayer.paused) {
        fullPlayIcon.innerHTML = '';
        fullPlayIcon.className = 'fas fa-play';
        spinningDisc?.classList.remove('is-playing');
    } 
    else {
        fullPlayIcon.innerHTML = '';
        fullPlayIcon.className = 'fas fa-pause';
        spinningDisc?.classList.add('is-playing');
    }
}


function openAnimatedPlayer() {
    
    mountToPortal(animatedPlayerOverlay);
    if (!history.state || history.state.type !== 'fullPlayer') {
    history.pushState({ type: 'fullPlayer' }, '');
    }


    document.body.classList.add('full-player-open', 'modal-open');



    if (!animatedPlayerOverlay) return;

    animatedPlayerOverlay.classList.add('open');

    if (openPlayerIcon) {
        openPlayerIcon.style.display = 'none';
    }



    renderFullPlayerPlaylist();
    repositionFullPlaylistContainer();
    syncFullPlayerState();
}

function closeAnimatedPlayer() {
    document.body.classList.remove('full-player-open', 'modal-open');



    if (!animatedPlayerOverlay) return;

        animatedPlayerOverlay.classList.remove('open');

        setTimeout(() => {
            unmountFromPortal(animatedPlayerOverlay);
        }, 300);


    if (openPlayerIcon) {
        openPlayerIcon.style.display = 'flex';
    }
}

/* ============================================
   MOBILE: SWIPE DOWN TO CLOSE FULL PLAYER
   ============================================ */
let touchStartY = 0;
let touchCurrentY = 0;

const fullPlayerOverlay = document.getElementById('animated-player-overlay');

if (fullPlayerOverlay) {
  fullPlayerOverlay.addEventListener('touchstart', (e) => {
    if (!document.body.classList.contains('full-player-open')) return;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  fullPlayerOverlay.addEventListener('touchmove', (e) => {
    if (!document.body.classList.contains('full-player-open')) return;
    touchCurrentY = e.touches[0].clientY;
  }, { passive: true });

  fullPlayerOverlay.addEventListener('touchend', () => {
    if (!document.body.classList.contains('full-player-open')) return;

    const swipeDistance = touchCurrentY - touchStartY;

    if (swipeDistance > 90) {   // swipe DOWN threshold
      closeAnimatedPlayer();
    }

    touchStartY = 0;
    touchCurrentY = 0;
  });
}


// --- 6. QUEUE ---
function updateNowPlayingQueue() {
    if (!nowPlayingListElement) return;

    // Panel UI state
    if (nowPlayingPanel) {
        if (userQueue.length > 0) {
            nowPlayingPanel.classList.add('has-items');
        } else {
            nowPlayingPanel.classList.remove('has-items');
        }
    }

    nowPlayingListElement.innerHTML = '';

    // EMPTY STATE
    if (userQueue.length === 0) {
        const li = document.createElement('li');
        li.classList.add('queue-empty');
        li.textContent = 'Queue is empty';
        nowPlayingListElement.appendChild(li);
        saveQueueToStorage();
        return;
    }

    userQueue.forEach(songId => {
        const song = currentSongs.find(s => s.id === songId);
        if (!song) return;

        const li = document.createElement('li');
        li.dataset.id = song.id;
        li.classList.add('queue-item');
        li.draggable = true;

        /* ---------- DRAG START ---------- */
        li.addEventListener('dragstart', (e) => {
            if (e.target.closest('.queue-remove-btn')) {
                e.preventDefault();
                return;
            }
            li.classList.add('dragging');
            e.dataTransfer.setData('text/plain', song.id);
        });

        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
        });

        li.innerHTML = `
            <div class="queue-item-main">
                <div class="queue-song-title">${song.title}</div>
                <div class="queue-song-artist">${song.artist}</div>
            </div>
            <button class="queue-remove-btn" title="Remove from queue">
                <i class="fas fa-times"></i>
            </button>
        `;

        /* ---------- PLAY ON CLICK ---------- */
        li.addEventListener('click', () => {
            const idx = userQueue.indexOf(song.id);
            if (idx > -1) {
                userQueue.splice(idx, 1);
                saveQueueToStorage();
            }
            updateNowPlayingQueue();
            playSong(song);
        });

        /* ---------- REMOVE BUTTON ---------- */
        const removeBtn = li.querySelector('.queue-remove-btn');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = userQueue.indexOf(song.id);
            if (idx > -1) {
                userQueue.splice(idx, 1);
                saveQueueToStorage();
            }
            updateNowPlayingQueue();
        });

        nowPlayingListElement.appendChild(li);

        /* ---------- DROP TARGET ---------- */
        li.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        li.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const draggedId = parseInt(
                e.dataTransfer.getData('text/plain'),
                10
            );

            const targetId = parseInt(li.dataset.id, 10);
            if (draggedId === targetId) return;

            const fromIndex = userQueue.indexOf(draggedId);
            const toIndex = userQueue.indexOf(targetId);
            if (fromIndex === -1 || toIndex === -1) return;

            // mouse position
            const rect = li.getBoundingClientRect();
            const dropY = e.clientY - rect.top;
            const isAfter = dropY > rect.height / 2;

            // remove dragged
            const item = userQueue.splice(fromIndex, 1)[0];

            let insertIndex;

            if (fromIndex < toIndex) {
                insertIndex = isAfter ? toIndex : toIndex - 1;
            } else {
                insertIndex = isAfter ? toIndex + 1 : toIndex;
            }

            userQueue.splice(insertIndex, 0, item);

            saveQueueToStorage();
            updateNowPlayingQueue();
        });
    });

    // FINAL SAVE
    saveQueueToStorage();
}




/* ---------- DESKTOP DROP ON EMPTY QUEUE SPACE ---------- */
if (nowPlayingListElement) {

    nowPlayingListElement.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    nowPlayingListElement.addEventListener('drop', (e) => {
        e.preventDefault();

        // ❌ Ignore if dropped on item
        if (e.target.closest('.queue-item')) return;

        const draggedId = parseInt(
            e.dataTransfer.getData('text/plain'),
            10
        );

        if (!draggedId) return;

        const fromIndex = userQueue.indexOf(draggedId);
        if (fromIndex === -1) return;

        userQueue.splice(fromIndex, 1);
        userQueue.push(draggedId);

        saveQueueToStorage();
        updateNowPlayingQueue();
    });

}



/* =========================================
   MOBILE TOUCH DRAG FOR QUEUE
========================================= */

let touchDragItem = null;
let queueTouchStartY = 0; // renamed


nowPlayingListElement.addEventListener('touchstart', (e) => {

    const item = e.target.closest('.queue-item');
    if (!item) return;

    touchDragItem = item;
    queueTouchStartY = e.touches[0].clientY;


    item.classList.add('dragging');

}, { passive: true });

nowPlayingListElement.addEventListener('touchmove', (e) => {

    if (!touchDragItem) return;

    e.preventDefault(); // stop scroll while dragging

    const currentY = e.touches[0].clientY;
    const target = document.elementFromPoint(
        e.touches[0].clientX,
        currentY
    )?.closest('.queue-item');

    if (!target || target === touchDragItem) return;

    const draggedId = parseInt(touchDragItem.dataset.id, 10);
    const targetId = parseInt(target.dataset.id, 10);

    const fromIndex = userQueue.indexOf(draggedId);
    const toIndex = userQueue.indexOf(targetId);

    if (fromIndex === -1 || toIndex === -1) return;

    userQueue.splice(
        toIndex,
        0,
        userQueue.splice(fromIndex, 1)[0]
    );

    updateNowPlayingQueue();

}, { passive: false });

nowPlayingListElement.addEventListener('touchend', () => {

    if (!touchDragItem) return;

    touchDragItem.classList.remove('dragging');
    touchDragItem = null;

    saveQueueToStorage();

});


// --- 7. RENDERING & FILTERING ---
function toggleFavorite(songId) {
    const songIndex = currentSongs.findIndex(song => song.id === songId);

    if (songIndex > -1) {

        const isFav = !currentSongs[songIndex].isFavorite;
        currentSongs[songIndex].isFavorite = isFav;

        saveSongsToStorage();

        // 🔥 MICRO UI UPDATE (no re-render)
        const card = document.querySelector(
            `.song-item[data-id="${songId}"]`
        );

        if (card) {
            const favBtn = card.querySelector('.favorite-btn');
            if (favBtn) {
                favBtn.classList.toggle('is-favorite', isFav);
                favBtn.textContent = isFav ? '❤️' : '🤍';
            }
        }

        highlightFullPlaylistPlaying();
    }
}


function highlightPlayingCard() {
    songListElement.querySelectorAll('.song-item').forEach(item => {
        const id = parseInt(item.dataset.id, 10);
        if (id === currentSongId) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
}

function filterCurrentView() {
    let filteredList = currentSongs;
    const searchTerm = searchBar ? searchBar.value.toLowerCase().trim() : '';

    // Reset special classes
    if (songListElement) songListElement.classList.remove('favorites-view');

    // By default hide clear favorites button
    if (clearFavoritesBtn) {
        clearFavoritesBtn.style.display = 'none';
    }

    // Base filters
    if (currentFilter.type === 'view' && currentFilter.value === 'favorites') {
        if (viewTitleElement) viewTitleElement.textContent = "Favorite Songs";
        filteredList = currentSongs.filter(song => song.isFavorite);

        // Favorites specific layout
        if (songListElement) songListElement.classList.add('favorites-view');

        // Show clear button only in Favorites
        if (clearFavoritesBtn) {
            clearFavoritesBtn.style.display = 'inline-flex';
        }
    } else if (currentFilter.type === 'category') {
        if (viewTitleElement) viewTitleElement.textContent = `${currentFilter.value} Songs`;
        filteredList = currentSongs.filter(song => song.category === currentFilter.value);
    } else if (currentFilter.type === 'artist') {
        if (viewTitleElement) viewTitleElement.textContent = `${currentFilter.value}'s Songs`;
        filteredList = currentSongs.filter(song => song.artist === currentFilter.value);
    } else {
        if (viewTitleElement) viewTitleElement.textContent = "All Songs";
        filteredList = currentSongs;
    }

    // Search filter
    if (searchTerm.length > 0) {
        filteredList = filteredList.filter(song => {
            const titleMatch = song.title.toLowerCase().includes(searchTerm);
            const artistMatch = song.artist.toLowerCase().includes(searchTerm);
            return titleMatch || artistMatch;
        });

        if (viewTitleElement) viewTitleElement.textContent = `Search Results for "${searchTerm}"`;
        if (songListElement) songListElement.classList.add('search-active');
    } else {
        if (songListElement) songListElement.classList.remove('search-active');
    }

    return filteredList;
}

// SONG CARDS (main 'Songs' view)
function renderSongList(songsToDisplay) {
    if (!songListElement) return;
    songListElement.innerHTML = '';

    if (!songsToDisplay || songsToDisplay.length === 0) {
        const li = document.createElement('li');
        const term = searchBar ? searchBar.value.trim() : '';

        // Special empty state for Favorites (no search term)
        if (
            currentFilter.type === 'view' &&
            currentFilter.value === 'favorites' &&
            term === ''
        ) {
            li.classList.add('favorites-empty');
            li.innerHTML = `
                <div class="favorites-empty-icon">
                    <i class="fas fa-heart-broken"></i>
                </div>
                <div class="favorites-empty-title">No favorites yet</div>
                <div class="favorites-empty-subtitle">
                    Tap the <span>heart</span> on any song to add it here.
                </div>
            `;
        } else {
            // default search/other empty state
            li.classList.add('search-empty-state');
            li.innerHTML = `
                <div class="search-empty-icon">
                    <i class="fas fa-search"></i>
                </div>
                <div class="search-empty-text">
                    <div class="search-empty-title">No results found</div>
                    <div class="search-empty-subtitle">
                        ${
                            term
                                ? `We couldn't find anything matching <span>${term}</span>.`
                                : `Try changing your filters or adding more songs.`
                        }
                    </div>
                </div>
            `;
        }

        songListElement.appendChild(li);
        return;
    }

    songsToDisplay.forEach(song => {
        const listItem = document.createElement('li');
        listItem.classList.add('song-item');
        listItem.dataset.id = song.id;

        if (song.id === currentSongId) {
            listItem.classList.add('playing');
        }

        const favoriteIcon = song.isFavorite ? '❤️' : '🤍';

        listItem.innerHTML = `
            <div class="album-card-inner">
                <button class="options-btn" title="More options" aria-label="More options">
                    <i class="fas fa-ellipsis-h"></i>
                </button>

                <button class="favorite-btn ${song.isFavorite ? 'is-favorite' : ''}" data-song-id="${song.id}" aria-label="Toggle favorite">
                    ${favoriteIcon}
                </button>

                <div class="album-cover-wrapper" data-song-id="${song.id}">
                    <img
                        src="${resolveCover(song.coverPath)}"
                        alt="${song.title} cover"
                        class="album-cover"
                        loading="lazy"
                    >

                    <div class="album-cover-overlay">
                        <span class="album-cover-play-icon">
                            <i class="fas fa-play"></i>
                        </span>
                    </div>
                </div>

                <div class="song-meta" data-song-id="${song.id}">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>

                <div class="options-menu">
                    <button class="option-btn option-download" title="Download" aria-label="Download">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="option-btn option-add-queue" title="Add to queue" aria-label="Add to queue">
                        <i class="fas fa-list-ul"></i>
                    </button>
                </div>
            </div>
        `;

        // Play when clicking cover or text
        const playTargets = listItem.querySelectorAll('.album-cover-wrapper, .song-meta');

        // Options button show/hide
        const optionsBtn = listItem.querySelector('.options-btn');


        // Download option with custom confirmation modal
        // Download option — instant download (no confirmation)
const downloadBtn = listItem.querySelector('.option-download');



        // Add to queue option
        const addQueueBtn = listItem.querySelector('.option-add-queue');


        // Accent color hook
        const imgEl = listItem.querySelector('.album-cover');
        if (imgEl) {
            imgEl.addEventListener('load', () => applyAccentFromImage(imgEl, listItem));
        }

        songListElement.appendChild(listItem);
    });
}


// 🔁 SONG CARD EVENT DELEGATION (Batch 4)
songListElement.addEventListener('click', async (e) => {

    const card = e.target.closest('.song-item');
    if (!card) return;

    const songId = parseInt(card.dataset.id, 10);
    const song = currentSongs.find(s => s.id === songId);
    if (!song) return;

    // ▶ PLAY
    if (
        e.target.closest('.album-cover-wrapper') ||
        e.target.closest('.song-meta')
    ) {
        playSong(song);
        return;
    }

    // ❤️ FAVORITE
    if (e.target.closest('.favorite-btn')) {
        e.stopPropagation();
        toggleFavorite(songId);
        return;
    }

    // ⋮ OPTIONS TOGGLE
    if (e.target.closest('.options-btn')) {
        e.stopPropagation();

        document.querySelectorAll('.song-item.show-options')
            .forEach(c => c !== card && c.classList.remove('show-options'));

        card.classList.toggle('show-options');
        return;
    }

    // ⬇ DOWNLOAD
    if (e.target.closest('.option-download')) {
        e.stopPropagation();
        card.classList.remove('show-options');

        try {
            const url = resolveAudio(song.filePath);
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const blob = await res.blob();
            const urlObj = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = urlObj;

            link.download =
                song.title.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".mp3";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(urlObj); // cleanup


        } catch {
            alert("Download failed.");
        }
        return;
    }

    // ➕ ADD TO QUEUE
    if (e.target.closest('.option-add-queue')) {
        e.stopPropagation();
        userQueue.push(songId);
        saveQueueToStorage();
        updateNowPlayingQueue();
        card.classList.remove('show-options');
        return;
    }
});


// ALBUM VIEW
function renderAlbumList() {
    if (!songListElement) return;
    songListElement.innerHTML = '';
    if (viewTitleElement) viewTitleElement.textContent = 'Albums';

    const albumMap = new Map();
    currentSongs.forEach(song => {
        const key = `${song.artist}||${song.category}`;
        if (!albumMap.has(key)) {
            albumMap.set(key, {
                artist: song.artist,
                category: song.category,
                songs: [song]
            });
        } else {
            albumMap.get(key).songs.push(song);
        }
    });

    const albums = Array.from(albumMap.values());

    if (albums.length === 0) {
        const li = document.createElement('li');
        li.classList.add('search-empty-state');
        li.innerHTML = `
            <div class="search-empty-icon">
                <i class="fas fa-compact-disc"></i>
            </div>
            <div class="search-empty-text">
                <div class="search-empty-title">No albums found</div>
                <div class="search-empty-subtitle">
                    Add more songs to see album collections.
                </div>
            </div>
        `;
        songListElement.appendChild(li);
        return;
    }

    albums.forEach(album => {
        const firstSong = album.songs[0];

        const li = document.createElement('li');
        li.classList.add('song-item', 'album-view-card');

        li.innerHTML = `
            <div class="album-card-inner">
                <div class="album-cover-wrapper">
                    <img
                        src="${resolveCover(firstSong.coverPath)}"
                        alt="${album.artist} album"
                        class="album-cover"
                        loading="lazy"

                    >
                    <div class="album-cover-overlay">
                        <span class="album-cover-play-icon">
                            <i class="fas fa-music"></i>
                        </span>
                    </div>
                </div>

                <div class="song-meta">
                    <div class="song-title">${album.artist}</div>
                    <div class="song-artist">${album.category} • ${album.songs.length} song${album.songs.length === 1 ? '' : 's'}</div>
                </div>
            </div>
        `;

        li.addEventListener('click', () => {
            // Switch to songs view filtered by this artist
            currentMainView = 'songs';
            setActiveMainViewButton();
            currentFilter = { type: 'artist', value: album.artist };
            renderCurrentView();
            setActiveFilterClass();
        });

        songListElement.appendChild(li);
    });
}

// ARTISTS VIEW (cards)
function renderArtistsView() {
    if (!songListElement) return;
    songListElement.innerHTML = '';
    if (viewTitleElement) viewTitleElement.textContent = 'Artists';

    const artistMap = new Map();
    currentSongs.forEach(song => {
        if (!artistMap.has(song.artist)) {
            artistMap.set(song.artist, { artist: song.artist, songs: [song] });
        } else {
            artistMap.get(song.artist).songs.push(song);
        }
    });

    const artists = Array.from(artistMap.values());

    if (artists.length === 0) {
        const li = document.createElement('li');
        li.classList.add('search-empty-state');
        li.innerHTML = `
            <div class="search-empty-icon">
                <i class="fas fa-user"></i>
            </div>
            <div class="search-empty-text">
                <div class="search-empty-title">No artists found</div>
                <div class="search-empty-subtitle">
                    Add more songs to see your artists here.
                </div>
            </div>
        `;
        songListElement.appendChild(li);
        return;
    }

    artists.forEach(artistObj => {
        const firstSong = artistObj.songs[0];

        const li = document.createElement('li');
        li.classList.add('song-item', 'artist-view-card');

        li.innerHTML = `
            <div class="album-card-inner">
                <div class="album-cover-wrapper">
                    ${
                        firstSong.coverPath
                            ? `<img
                                    src="${resolveCover(firstSong.coverPath)}"
                                    alt="${artistObj.artist}"
                                    class="album-cover"
                                    loading="lazy"
                                >`
                            : `<div class="artist-placeholder"></div>`
                    }
                    <div class="album-cover-overlay">
                        <span class="album-cover-play-icon">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div class="song-meta">
                    <div class="song-title">${artistObj.artist}</div>
                    <div class="song-artist">${artistObj.songs.length} song${artistObj.songs.length === 1 ? '' : 's'}</div>
                </div>
            </div>
        `;

        li.addEventListener('click', () => {
            currentMainView = 'songs';
            currentFilter = { type: 'artist', value: artistObj.artist };

            pushViewStateIfNeeded('artist');

            setActiveMainViewButton();
            renderCurrentView();
            setActiveFilterClass();

        });

        songListElement.appendChild(li);
    });
}

// Helper to choose which view to render
function renderCurrentView() {
    if (currentMainView === 'songs') {
        const list = filterCurrentView();
        renderSongList(list);
    } else if (currentMainView === 'albums') {
        renderAlbumList();
    } else if (currentMainView === 'artists') {
        renderArtistsView();
    }
    // also refresh full-player playlist for current full category
    renderFullPlayerPlaylist();
}

// Artists list in sidebar
function renderArtistsList() {
    const artistsList = document.getElementById('artists-list');
    if (!artistsList) return;
    artistsList.innerHTML = '';

    const uniqueArtists = [...new Set(currentSongs.map(song => song.artist))];

    uniqueArtists.forEach(artist => {
        const li = document.createElement('li');
        li.textContent = artist;
        li.dataset.artist = artist;

        li.addEventListener('click', (event) => {
            closeSidebarIfMobile();

            if (searchBar) searchBar.value = '';
            currentFilter = { type: 'artist', value: event.target.dataset.artist };
            currentMainView = 'songs';
            pushViewStateIfNeeded('artist');

            setActiveMainViewButton();
            renderCurrentView();
            setActiveFilterClass();
        });

        artistsList.appendChild(li);
    });
}

// --- 8. FULL-PLAYER PLAYLIST (now in right-side playlist box) ---
// This function renders the playlist into #full-playlist (inside #full-playlist-container).
// repositionFullPlaylistContainer ensures that the playlist container and tabs live
// inside a .full-playlist-box above the controls in the right panel.
function renderFullPlayerPlaylist() {
    // ensure container exists
    const ul = fullPlaylistEl;

    if (!ul) return;

    // choose songs by category
    let songs = currentSongs;
    if (currentFullCategory && currentFullCategory !== 'All') {
        songs = songs.filter(song => song.category === currentFullCategory);
    }

    // apply the modal list class so it uses the same CSS
    ul.className = 'category-modal-song-list full-playlist';
    ul.setAttribute('role', 'list');
    ul.innerHTML = '';

    if (songs.length === 0) {
        const emptyLi = document.createElement('li');
        emptyLi.classList.add('full-playlist-empty', 'category-modal-song-item');
        emptyLi.textContent = 'No songs found in this category yet.';
        emptyLi.setAttribute('role', 'listitem');
        ul.appendChild(emptyLi);
        return;
    }

    songs.forEach(song => {
        const li = document.createElement('li');
        li.className = 'category-modal-song-item full-playlist-item';
        li.dataset.id = song.id;
        li.setAttribute('role', 'listitem');

        li.innerHTML = `
            <div class="category-modal-song-main fpi-main" title="${song.title}">
                <div class="category-modal-song-title fpi-title">${song.title}</div>
                <div class="category-modal-song-artist fpi-artist">${song.artist} • ${song.category}</div>
            </div>
            <button class="category-modal-play-btn fpi-play-btn" aria-label="Play ${song.title}">
                <i class="fas fa-play"></i>
            </button>
        `;

        // clicking the whole row plays
        li.addEventListener('click', () => {
            playSong(song);
        });

        // clicking the button also plays (stopPropagation already accounted)
        li.querySelector('.fpi-play-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            playSong(song);
        });

        ul.appendChild(li);
    });

    // After rendering, ensure highlight updated
    highlightFullPlaylistPlaying();
    repositionFullPlaylistContainer();
}

function highlightFullPlaylistPlaying() {
    const ul = fullPlaylistEl;

    if (!ul) return;
    const items = ul.querySelectorAll('.full-playlist-item');
    items.forEach(li => {
        const id = parseInt(li.dataset.id, 10);
        if (id === currentSongId) {
            li.classList.add('playing');
        } else {
            li.classList.remove('playing');
        }
    });
}




// --- Utility: centralized stop/cleanup ---
function stopPlaybackCleanup() {
    try {
        if (!audioPlayer) return;
        audioPlayer.pause();

        if (playPauseBtn) {
            playPauseBtn.classList.remove('playing-btn', 'is-playing');
        }

        if (fullPlayPauseBtn) {
            fullPlayPauseBtn.classList.remove('fa-pause');
            fullPlayPauseBtn.classList.add('fa-play');
        }

        spinningDisc && spinningDisc.classList.remove('is-playing');

        if (playerTitle) playerTitle.textContent = 'No Song Selected';
        if (playerArtist) playerArtist.textContent = '';

        syncFullPlayerState();

    } catch (e) {
        console.warn('Error during stopPlaybackCleanup', e);
    }
}


// --- 11. PLAYER CONTROLS (NEXT/PREV/SHUFFLE/REPEAT & PLAY) ---
function setPlayingUI(isPlaying) {
    if (isPlaying) {
        if (playPauseBtn) playPauseBtn.classList.add('is-playing', 'playing-btn');
        if (controls) controls.classList.add('controls-playing');
        spinningDisc && spinningDisc.classList.add('is-playing');
    } else {
        if (playPauseBtn) playPauseBtn.classList.remove('is-playing', 'playing-btn');
        if (controls) controls.classList.remove('controls-playing');
        spinningDisc && spinningDisc.classList.remove('is-playing');
    }
    syncFullPlayerState();
}

function togglePlayPauseFromFullPlayer() {
    if (!audioPlayer) return;

    if (audioPlayer.paused || !audioPlayer.src) {
        audioPlayer.play().catch(() => {});
        setPlayingUI(true);
    } else {
        audioPlayer.pause();
        setPlayingUI(false);
    }
}


function playSong(song) {

    if (!audioPlayer || !song) return;

    const newSrc = resolveAudio(song.filePath);
    const currentSrc = audioPlayer.src;

    /* ---------- SAME SONG ---------- */
    if (currentSongId === song.id) {

        // ensure UI always updates
        miniCover.src = resolveCover(song.coverPath);
        miniCover.classList.remove('hidden');

        fullPlayerCover.src = resolveCover(song.coverPath);

        if (audioPlayer.paused) {
            audioPlayer.play().catch(()=>{});
            setPlayingUI(true);
        } 
        else {
            audioPlayer.pause();
            setPlayingUI(false);
        }

        return;
    }


    /* ---------- NEW SONG ---------- */
    audioPlayer.pause();

    audioPlayer.src = newSrc;

    // 🔥 reset UI instantly
    if (progressBar) progressBar.value = 0;
    if (fullProgressBar) fullProgressBar.value = 0;
    if (currentTimeDisplay) currentTimeDisplay.textContent = "0:00";


    audioPlayer.play().catch(()=>{});

    currentSongId = song.id;

    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;

    miniCover.src = resolveCover(song.coverPath);
    miniCover.classList.remove('hidden');

    fullPlayerCover.src = resolveCover(song.coverPath);

    animatedTitle.textContent = song.title;
    animatedArtist.textContent = song.artist;

    setPlayingUI(true);
    highlightPlayingCard();
    highlightFullPlaylistPlaying();
    preloadNextSong();
    savePlayerState();
}


let nextPrefetchLink = null;

function preloadNextSong() {
    const list = filterCurrentView();
    const idx = list.findIndex(s => s.id === currentSongId);
    const next = list[idx + 1];
    if (!next) return;

    if (nextPrefetchLink) {
        nextPrefetchLink.remove();
    }

    nextPrefetchLink = document.createElement("link");
    nextPrefetchLink.rel = "prefetch";
    nextPrefetchLink.as = "audio";
    nextPrefetchLink.href = resolveAudio(next.filePath);

    document.head.appendChild(nextPrefetchLink);
}




function playNextSong() {
    const viewSongs = filterCurrentView();
    if (viewSongs.length === 0) return;

    if (userQueue.length > 0) {
        const nextId = userQueue.shift();
        saveQueueToStorage();
        updateNowPlayingQueue();
        const nextSong = currentSongs.find(s => s.id === nextId);
        if (nextSong) {
            playSong(nextSong);
        } else {
            playNextSong();
        }
        return;
    }

    if (!currentSongId) {
        const first = shuffleOn
            ? viewSongs[Math.floor(Math.random() * viewSongs.length)]
            : viewSongs[0];
        if (first) playSong(first);
        return;
    }

    const currentIndexInView = viewSongs.findIndex(s => s.id === currentSongId);
    if (currentIndexInView === -1) {
        const first = shuffleOn
            ? viewSongs[Math.floor(Math.random() * viewSongs.length)]
            : viewSongs[0];
        if (first) playSong(first);
        return;
    }

    if (repeatMode === 'one') {
        const repeatSong = viewSongs[currentIndexInView];
        if (repeatSong) playSong(repeatSong);
        return;
    }

    let nextIndex;
    if (shuffleOn) {
        if (viewSongs.length === 1) {
            nextIndex = currentIndexInView;
        } else {
            do {
                nextIndex = Math.floor(Math.random() * viewSongs.length);
            } while (nextIndex === currentIndexInView);
        }
    } else {
        nextIndex = currentIndexInView + 1;
    }

    if (nextIndex >= viewSongs.length) {
        if (repeatMode === 'all') {
            nextIndex = 0;
        } else {
            stopPlaybackCleanup();
            return;
        }
    }

    const nextSong = viewSongs[nextIndex];
    if (nextSong) playSong(nextSong);
}

function playPrevSong() {
    const viewSongs = filterCurrentView();
    if (viewSongs.length === 0) return;

    if (!currentSongId) {
        playSong(viewSongs[0]);
        return;
    }

    const currentIndexInView = viewSongs.findIndex(s => s.id === currentSongId);
    if (currentIndexInView === -1) {
        playSong(viewSongs[0]);
        return;
    }

    if (repeatMode === 'one') {
        playSong(viewSongs[currentIndexInView]);
        return;
    }

    let prevIndex;
    if (shuffleOn) {
        if (viewSongs.length === 1) {
            prevIndex = currentIndexInView;
        } else {
            do {
                prevIndex = Math.floor(Math.random() * viewSongs.length);
            } while (prevIndex === currentIndexInView);
        }
    } else {
        prevIndex = currentIndexInView - 1;
    }

    if (prevIndex < 0) {
        if (repeatMode === 'all') {
            prevIndex = viewSongs.length - 1;
        } else {
            prevIndex = 0;
        }
    }

    const prevSong = viewSongs[prevIndex];
    if (prevSong) playSong(prevSong);
}

// --- 12. AUDIO EVENT LISTENERS ---
function setupAudioListeners() {
    if (!audioPlayer) return;

audioPlayer.addEventListener('timeupdate', () => {

    // 🚫 DO NOT TOUCH BAR WHILE PREVIEW SEEKING
    if (isPreviewSeeking) return;

    const currentTime = audioPlayer.currentTime || 0;
    const duration = audioPlayer.duration || 0;

    if (currentTimeDisplay)
        currentTimeDisplay.textContent = formatTime(currentTime);
        document.getElementById('full-current-time').textContent =
        formatTime(currentTime);


    if (isFinite(duration) && duration > 0) {
        const progress = (currentTime / duration) * 100;
        progressBar && (progressBar.value = progress);
        fullProgressBar && (fullProgressBar.value = progress);
    }

});


audioPlayer.addEventListener('loadedmetadata', () => {

    if (audioPlayer.dataset.pendingSeek) {

        const t = parseFloat(audioPlayer.dataset.pendingSeek);

        if (isFinite(t)) {
            audioPlayer.currentTime = t;
        }

        delete audioPlayer.dataset.pendingSeek;
        isPreviewSeeking = false; // 🔓 UNLOCK UI
    }

    durationDisplay &&
        (durationDisplay.textContent =
            formatTime(audioPlayer.duration || 0));

    fullDurationDisplay &&
        (fullDurationDisplay.textContent =
            formatTime(audioPlayer.duration || 0));
});



    audioPlayer.addEventListener('ended', playNextSong);

    if (progressBar) {
        progressBar.addEventListener('input', () => {
            const d = audioPlayer.duration;
            if (!isFinite(d) || d <= 0) return;
            const seekTime = (progressBar.value / 100) * d;
            audioPlayer.currentTime = seekTime;
        });
    }

    if (fullProgressBar) {
        fullProgressBar.addEventListener('input', () => {
            const d = audioPlayer.duration;
            if (!isFinite(d) || d <= 0) return;
            const seekTime = (fullProgressBar.value / 100) * d;
            audioPlayer.currentTime = seekTime;
        });
    }

    if (volumeBar) {
        volumeBar.addEventListener('input', () => {
            audioPlayer.volume = volumeBar.value / 100;
            
            audioPlayer.muted = false;
            fullVolumeBar.value = volumeBar.value;
            if (fullVolumeBar) {
          }

          savePlayerState();
          updateVolumeIcon();
        });


        audioPlayer.volume = volumeBar.value / 100;
    } else {
        audioPlayer.volume = 1.0;
    }

    if (fullVolumeBar && !volumeBar) {
        audioPlayer.volume = fullVolumeBar.value / 100;
    }

    if (volumeBar) volumeBar.value = Math.round((audioPlayer.volume || 1) * 100);
    if (fullVolumeBar && (fullVolumeBar.value == null || fullVolumeBar.value === '')) fullVolumeBar.value = volumeBar ? volumeBar.value : 100;
}

// --- 13. CATEGORY MODAL LOGIC ---
function renderCategoryGridInModal() {
    if (!categoryModalTitle || !categoryModalBody) return;
    categoryModalView = 'grid';
    categoryModalTitle.innerHTML = `All Categories <span>Select a playlist</span>`;

    const grid = document.createElement('div');
    grid.className = 'category-modal-grid';

    CATEGORY_CONFIG.forEach(cfg => {
        if (cfg.key === 'All') return; // skip All here to avoid duplicate
        const count = currentSongs.filter(s => s.category === cfg.key).length;

        const btn = document.createElement('button');
        btn.className = 'category-modal-btn';
        btn.dataset.category = cfg.key;

        btn.innerHTML = `
            <div class="category-modal-icon">
                <i class="fas ${cfg.icon}"></i>
            </div>
            <div class="category-modal-text">
                <div class="category-modal-label">${cfg.label}</div>
                <div class="category-modal-count">${count} song${count === 1 ? '' : 's'}</div>
            </div>
        `;

        btn.addEventListener('click', () => {
            if (!history.state || history.state.type !== 'categoryModalSongs') {
                history.pushState({ type: 'categoryModalSongs' }, '');
            }

            renderCategorySongsInModal(cfg.key, cfg.label);
        });


        grid.appendChild(btn);
    });

    categoryModalBody.innerHTML = '';
    categoryModalBody.appendChild(grid);
}

function renderCategorySongsInModal(categoryKey, label) {
    if (!categoryModalTitle || !categoryModalBody) return;
    categoryModalView = 'songs';
    const songs = currentSongs.filter(s => s.category === categoryKey);

    const topRow = document.createElement('div');
    topRow.className = 'category-modal-top-row';

    const titleSpan = document.createElement('div');
    titleSpan.className = 'category-modal-selected-title';
    titleSpan.textContent = `${label} • ${songs.length} song${songs.length === 1 ? '' : 's'}`;

    const backBtn = document.createElement('button');
    backBtn.className = 'category-modal-back-btn';
    backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> All categories`;
    backBtn.addEventListener('click', () => {
        renderCategoryGridInModal();
    });

    topRow.appendChild(titleSpan);
    topRow.appendChild(backBtn);

    if (songs.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'category-modal-empty';
        emptyDiv.textContent = 'No songs found in this category yet.';
        categoryModalBody.innerHTML = '';
        categoryModalBody.appendChild(topRow);
        categoryModalBody.appendChild(emptyDiv);
        return;
    }

    const list = document.createElement('ul');
    list.className = 'category-modal-song-list';

    songs.forEach(song => {
        const li = document.createElement('li');
        li.className = 'category-modal-song-item';

        li.innerHTML = `
            <div class="category-modal-song-main">
                <div class="category-modal-song-title">${song.title}</div>
                <div class="category-modal-song-artist">${song.artist}</div>
            </div>
            <button class="category-modal-play-btn" aria-label="Play ${song.title}">
                <i class="fas fa-play"></i>
            </button>
        `;

        li.addEventListener('click', () => {
            playSong(song);
            closeCategoryModal();
        });

        li.querySelector('.category-modal-play-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            playSong(song);
            closeCategoryModal();
        });

        list.appendChild(li);
    });

    categoryModalBody.innerHTML = '';
    categoryModalBody.appendChild(topRow);
    categoryModalBody.appendChild(list);
}

function openCategoryModal() {
    if (!categoryModal) return;

    mountToPortal(categoryModal);
    if (!history.state || history.state.type !== 'categoryModal') {
    history.pushState({ type: 'categoryModal' }, '');
    }

    document.body.classList.add('modal-open');
    categoryModal.classList.add('open');
    renderCategoryGridInModal();
}

function closeCategoryModal() {

    if (categoryModal) {
        categoryModal.classList.remove('open');

        // wait for animation end before removing
        setTimeout(() => {
            unmountFromPortal(categoryModal);
        }, 250);
    }

    document.body.classList.remove('modal-open');
}



function setupCategoryModalEvents() {
    if (viewAllCategoriesBtn) {
        viewAllCategoriesBtn.addEventListener('click', () => {
    closeSidebarIfMobile();
    openCategoryModal();
});

    }
    if (categoryModalClose) {
        categoryModalClose.addEventListener('click', () => {
            if (categoryModalView === 'songs') {
                renderCategoryGridInModal();
            } else {
                closeCategoryModal();
            }
        });
    }
    if (categoryModal) {
        categoryModal.addEventListener('click', (e) => {
            if (e.target === categoryModal) {
                closeCategoryModal();
            }
        });
    }
}

// --- 14. MAIN VIEW BUTTONS ---
function setActiveMainViewButton() {
    if (!mainViewButtons) return;
    mainViewButtons.forEach(btn => {
        if (btn.dataset.mainView === currentMainView) {
            btn.classList.add('active-main-view');
        } else {
            btn.classList.remove('active-main-view');
        }
    });
}

// --- 15. CONFIRM MODAL HELPERS ---
function openConfirmModal({
    title,
    message,
    onConfirm,
    confirmLabel,
    confirmIconClass,
    modalType
}) {
    if (!confirmModal) return;

    mountToPortal(confirmModal);


    if (confirmModalTitle && title) {
        confirmModalTitle.textContent = title;
    }
    if (confirmModalMessage && message) {
        confirmModalMessage.textContent = message;
    }


    if (confirmModalOk && confirmLabel) {
        if (confirmIconClass) {
            confirmModalOk.innerHTML = `<i class="fas ${confirmIconClass}"></i><span>${confirmLabel}</span>`;
        } else {
            confirmModalOk.textContent = confirmLabel;
        }
    }

    pendingConfirmAction = typeof onConfirm === 'function' ? onConfirm : null;
    confirmModal.classList.add('open');
    document.body.classList.add('modal-open');

}

function closeConfirmModal() {

    if (!confirmModal) return;

    confirmModal.classList.remove('open');

    setTimeout(() => {
        unmountFromPortal(confirmModal);
    }, 200);

    document.body.classList.remove('modal-open');
    pendingConfirmAction = null;

    // restore focus
    lastFocusedElement?.focus();
}


// --- 17. HELPERS FOR REPOSITIONING PLAYLIST ---
// Move the full-player playlist container so it appears in a dedicated right-panel box
// above the full-player controls. If necessary, create the .full-playlist-box and
// move the #full-tabs-row into it so category tabs sit at the top of the playlist.
function repositionFullPlaylistContainer() {
    const playlistContainer = fullPlaylistContainer;


    const fullPlayerRight = document.getElementById('full-player-right');
    const fullControlsContainer = document.getElementById('full-player-controls-container');

    if (!playlistContainer || !fullPlayerRight) return;

    // find or create the playlist box in the right panel
    let playlistBox = fullPlayerRight.querySelector('.full-playlist-box');
    if (!playlistBox) {
        playlistBox = document.createElement('div');
        playlistBox.className = 'full-playlist-box';
        // prefer to put it as the first child of right panel
        fullPlayerRight.insertBefore(playlistBox, fullPlayerRight.firstElementChild);
    }

    // move the tabs into the playlistBox (so they appear at top of playlist)
    const tabs = fullTabsRow;

    if (tabs) {
        if (tabs.parentElement !== playlistBox) {
            playlistBox.appendChild(tabs);
        }
    }

    // ensure playlistContainer is inside playlistBox (after the tabs)
    if (playlistContainer.parentElement !== playlistBox) {
        playlistBox.appendChild(playlistContainer);
    }

    // Accessibility: label the playlist container region
    playlistContainer.setAttribute('aria-label', 'Full player playlist');
    playlistContainer.setAttribute('role', 'region');

    // ensure the controls container remains below the playlist box in the layout
    if (fullControlsContainer && fullControlsContainer.parentElement !== document.getElementById('full-player-content')) {
        // ensure controls container exists and is where expected (we don't forcibly move it)
        // (no-op) — the markup should already have controls in place; we're only ensuring playlist is in right panel
    }
}

function closeSidebarIfMobile() {
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }
}
function pushViewStateIfNeeded(stateType) {
    const current = history.state && history.state.type;
    if (current !== stateType) {
        history.pushState({ type: stateType }, '');
    }
}


// --- 18. INITIALIZATION ---
function initApp() {

    if (!history.state) {
    history.replaceState({ type: 'base' }, '');
}

    loadSongsFromStorage();
        // 🔀 Shuffle songs once on page load (fresh order every refresh)
    currentSongs = [...currentSongs];
    shuffleArrayOnce(currentSongs);

    loadQueueFromStorage();
    applyStoredTheme();
    setupAudioListeners();
    loadPlayerState();

    


    mainViewButtons = document.querySelectorAll('.main-view-btn');
    fullTabButtons = document.querySelectorAll('.full-tab-btn');

    // Ensure playlist container positioning is set BEFORE rendering the playlist to avoid flicker
    repositionFullPlaylistContainer();
    renderCurrentView();
    renderArtistsList();
    setActiveFilterClass();
    updateNowPlayingQueue();
    setupCategoryModalEvents();
    renderFullPlayerPlaylist();

   

    // Search
    // Search (filters current view ONLY)
    if (searchBar) {
        searchBar.addEventListener('input', () => {
            renderCurrentView();
        });
    }

    if (searchToggleBtn && searchBar && mainHeaderRow) {
        searchToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // ✅ IMPORTANT
            mainHeaderRow.classList.add('search-open');
            searchBar.value = '';
            searchBar.focus();
        });
    }




    // Main nav filters (Playlist / Favorites)
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
        mainNav.addEventListener('click', (event) => {
            const btn = event.target.closest('button');
            if (!btn) return;
            closeSidebarIfMobile();

            if (searchBar) searchBar.value = '';
            currentFilter = { type: 'view', value: btn.dataset.view };
                currentMainView = 'songs';

                if (btn.dataset.view !== 'playlist') {
                    pushViewStateIfNeeded('view');
                }

            setActiveMainViewButton();
            renderCurrentView();
            setActiveFilterClass();
        });
    }

    // Category filters in sidebar
    const categoriesList = document.getElementById('categories-list');
    if (categoriesList) {
        categoriesList.addEventListener('click', (event) => {
            const btn = event.target.closest('button');
            if (!btn) return;
            closeSidebarIfMobile();

            if (searchBar) searchBar.value = '';
            currentFilter = { type: 'category', value: btn.dataset.category };
            currentMainView = 'songs';
            pushViewStateIfNeeded('category');

            setActiveMainViewButton();
            renderCurrentView();
            setActiveFilterClass();
        });
    }

    // Top-right main view toggle (Songs / Albums / Artists)
       
        if (mainViewButtons) {
            mainViewButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const view = btn.dataset.mainView;
                    if (!view) return;

                    // 🔹 push history ONLY for real screens
                    if (view !== 'songs') {
                        pushViewStateIfNeeded(view);
                    }

                    currentMainView = view;
                    setActiveMainViewButton();
                    renderCurrentView();
                });
            });
        }


    // Play/Pause button (bottom)
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (!audioPlayer) return;
            if (audioPlayer.paused || !audioPlayer.src) {
                if (!audioPlayer.src && currentSongs.length > 0) {
                    playSong(currentSongs[0]);
                    return;
                }
                audioPlayer.play().catch(e => console.warn('Play prevented:', e));
                setPlayingUI(true);
            } else {
                audioPlayer.pause();
                setPlayingUI(false);
            }
        });
    }

    // Next/Previous buttons (bottom)
    if (prevBtn) prevBtn.addEventListener('click', playPrevSong);
    if (nextBtn) nextBtn.addEventListener('click', playNextSong);
    // 🔀 Shuffle toggle
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            shuffleOn = !shuffleOn;
            savePlayerState();
            shuffleBtn.classList.toggle('control-active', shuffleOn);
        });
    }

    // 🔁 Repeat mode toggle: off → all → one
    if (repeatBtn) {
        repeatBtn.addEventListener('click', () => {
            if (repeatMode === 'off') {
                repeatMode = 'all';
                repeatBtn.classList.add('control-active');
                repeatBtn.classList.remove('repeat-one');
                repeatBtn.title = 'Repeat All';
            } 
            else if (repeatMode === 'all') {
                repeatMode = 'one';
                repeatBtn.classList.add('control-active', 'repeat-one');
                repeatBtn.title = 'Repeat One';
            } 
            else {
                repeatMode = 'off';
                repeatBtn.classList.remove('control-active', 'repeat-one');
                repeatBtn.title = 'Repeat Off';
            }
            savePlayerState();

        });
    }


    

    // Full player controls — directly control audio rather than delegating to bottom button
    if (fullPlayPauseBtn) {
        fullPlayPauseBtn.addEventListener('click', () => {

            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }

            syncFullPlayerState(); // 🔥 force icon update
        });
    }



    if (fullNextBtn) {
        fullNextBtn.addEventListener('click', () => {
            playNextSong();
            setTimeout(syncFullPlayerState, 100);
        });
    }

    if (fullPrevBtn) {
        fullPrevBtn.addEventListener('click', () => {
            playPrevSong();
            setTimeout(syncFullPlayerState, 100);
        });
    }

    // Full-player volume
    if (fullVolumeBar) {
        fullVolumeBar.addEventListener('input', () => {
            const vol = fullVolumeBar.value / 100;
            if (audioPlayer) audioPlayer.volume = vol;
            if (volumeBar) volumeBar.value = fullVolumeBar.value;

            audioPlayer.muted = false;
            updateVolumeIcon();   // 🔥 ADD
            savePlayerState();   // optional
        });

        fullVolumeBar.value = volumeBar ? volumeBar.value : 100;
    }


    // Full-player tabs
    // Re-query because we might have moved tabs into playlist box
    fullTabButtons = document.querySelectorAll('.full-tab-btn');
    if (fullTabButtons && fullTabButtons.length > 0) {
        fullTabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.fullCat;
                if (!cat) return;
                currentFullCategory = cat;

                fullTabButtons.forEach(b => b.classList.remove('active-full-tab'));
                btn.classList.add('active-full-tab');

                renderFullPlayerPlaylist();
            });
        });
    }



    // Tap album art / disc to play-pause (mobile friendly)
    if (spinningDisc) {
        spinningDisc.addEventListener('click', togglePlayPauseFromFullPlayer);
    }


    // Mobile menu toggle
// Mobile menu toggle (with outside click close)
if (mobileMenuToggle && sidebar) {

mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
});



    // Prevent sidebar clicks from closing itself
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}




    // Theme toggle
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.body.dataset.theme === 'light' ? 'light' : 'dark';
            const next = current === 'light' ? 'dark' : 'light';
            document.body.dataset.theme = next;
            localStorage.setItem('musicPlayerTheme', next);
            updateThemeToggleIcon();
        });
    }

    // Animated player open/close (safe guards)
    if (openPlayerIcon) openPlayerIcon.addEventListener('click', openAnimatedPlayer);
    if (closePlayerBtn) closePlayerBtn.addEventListener('click', closeAnimatedPlayer);

    // Clear all favorites button with confirmation
    if (clearFavoritesBtn) {
        clearFavoritesBtn.addEventListener('click', () => {
            const favCount = currentSongs.filter(song => song.isFavorite).length;
            if (favCount === 0) return;

            const title =
                favCount === 1
                    ? 'Remove favorite song?'
                    : `Clear all ${favCount} favorite songs?`;

            const message =
                favCount === 1
                    ? 'This will remove this song from your favorites list. You can favorite it again later.'
                    : 'This will remove all songs from your favorites list. You can favorite them again later.';

            openConfirmModal({
                title,
                message,
                onConfirm: () => {
                    let changed = false;
                    currentSongs.forEach(song => {
                        if (song.isFavorite) {
                            song.isFavorite = false;
                            changed = true;
                        }
                    });

                    if (changed) {
                        saveSongsToStorage();
                    }

                    if (currentFilter.type === 'view' && currentFilter.value === 'favorites') {
                        renderCurrentView();
                    }
                   
                    highlightFullPlaylistPlaying();
                }
            });
        });
    }

    // Confirm modal buttons
    if (confirmModalCancel) {
        confirmModalCancel.addEventListener('click', () => {
            closeConfirmModal();
        });
    }

    if (confirmModalOk) {
        confirmModalOk.addEventListener('click', () => {
            if (pendingConfirmAction) {
                pendingConfirmAction();
            }
            closeConfirmModal();
        });
    }

    // Click on dim background closes confirm modal
    if (confirmModal) {
        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                closeConfirmModal();
            }
        });
    }

 
    // Default main view button state
    setActiveMainViewButton();



    // ================= DISCLAIMER INIT =================
    (function initDisclaimer(){
    const overlay = document.getElementById('disclaimer-overlay');
    const acceptBtn = document.getElementById('accept-disclaimer-btn');
    if (!overlay || !acceptBtn) return;

    const DISCLAIMER_KEY = 'viridxi_disclaimer_v1';
    const accepted = localStorage.getItem(DISCLAIMER_KEY);

    mountToPortal(overlay);

    if (!accepted) {
        overlay.classList.remove('disclaimer-hidden');
        document.body.classList.add('modal-open');
        history.pushState({ disclaimer: true }, '');
    }

    acceptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.setItem(DISCLAIMER_KEY, 'accepted');
        overlay.classList.add('disclaimer-hidden');
        document.body.classList.remove('modal-open');
    });

    })();

    const installBtn = document.getElementById('install-app-btn');

    if (installBtn) {
        installBtn.addEventListener('click', async () => {

            if (!deferredInstallPrompt) {
                alert("App is already installed or not supported.");
                return;
            }

            deferredInstallPrompt.prompt();

            const choice = await deferredInstallPrompt.userChoice;

            if (choice.outcome === 'accepted') {
                console.log('User installed the app');
            }

            deferredInstallPrompt = null;
        });
    }
      updateVolumeIcon();

}




// 🔒 GLOBAL CLICK HANDLER (merged)
document.addEventListener('click', (e) => {

    if (isDisclaimerOpen()) return;

    /* close song options menu */
    if (!e.target.closest('.song-item')) {
        document.querySelectorAll('.song-item.show-options')
        .forEach(card => card.classList.remove('show-options'));
    }

    if (mainHeaderRow?.classList.contains('search-open')) {

        const inside =
            searchBar.contains(e.target) ||
            searchToggleBtn.contains(e.target)


        if (!inside) {
            mainHeaderRow.classList.remove('search-open');
            searchBar.value = '';
            renderCurrentView();
        }
    }

    /* close sidebar (mobile) */
    if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
    ) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }

});




// Start everything once DOM is ready
document.addEventListener('DOMContentLoaded', initApp);


/* ===============================
   MASTER KEYBOARD HANDLER
   =============================== */

function seekWithPreview(seconds) {
    if (!audioPlayer) return;

    let baseTime;

    if (!isFinite(audioPlayer.duration)) {

        isPreviewSeeking = true; // 🔒 LOCK UI

        baseTime = audioPlayer.dataset.pendingSeek
            ? parseFloat(audioPlayer.dataset.pendingSeek)
            : audioPlayer.currentTime;

        let newTime = baseTime + seconds;
        newTime = Math.max(0, newTime);

        audioPlayer.dataset.pendingSeek = newTime;

        updatePreviewProgress(newTime);
        return;
    }

    audioPlayer.currentTime += seconds;
}


function updatePreviewProgress(fakeTime) {

    // assume 3 min ONLY for preview bar
    const fakeDuration = 180;

    const percent = Math.min(
        100,
        (fakeTime / fakeDuration) * 100
    );

    if (progressBar) progressBar.value = percent;
    if (fullProgressBar) fullProgressBar.value = percent;
}




document.addEventListener('keydown', (e) => {
    // ⛔ Ignore shortcuts when CTRL or CMD is pressed
    if (e.ctrlKey || e.metaKey) return;

    // ❌ Ignore if disclaimer is open
    if (isDisclaimerOpen()) return;

    // ⛔ Ignore when typing
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key !== 'Escape') return;
    }

    switch (e.key.toLowerCase()) {

        /* ---------- ESC ---------- */
        case 'escape':

            // 1) Close search
            if (mainHeaderRow?.classList.contains('search-open')) {
                mainHeaderRow.classList.remove('search-open');
                searchBar.value = '';
                renderCurrentView();
                return;
            }

            // 2) Close confirm modal
            if (confirmModal?.classList.contains('open')) {
                closeConfirmModal();
                return;
            }

            // 3) Close category modal
            if (categoryModal?.classList.contains('open')) {
                if (categoryModalView === 'songs') {
                    renderCategoryGridInModal();
                } else {
                    closeCategoryModal();
                }
                return;
            }

            // 4) Close full player
            if (document.body.classList.contains('full-player-open')) {
                closeAnimatedPlayer();
                return;
            }

            break;

        /* ---------- PLAY ---------- */
        case ' ':
            e.preventDefault();
            togglePlayPauseFromFullPlayer();
            break;

        /* ---------- SEEK ---------- */
        case 'arrowright':
            seekWithPreview(5);
            break;

        case 'arrowleft':
            seekWithPreview(-5);
            break;


        /* ---------- VOLUME ---------- */
        case 'arrowup':
            e.preventDefault();
            audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.05);
            volumeBar.value = audioPlayer.volume * 100;
            fullVolumeBar && (fullVolumeBar.value = volumeBar.value);
            savePlayerState();
            break;

        case 'arrowdown':
            e.preventDefault();
            audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.05);
            volumeBar.value = audioPlayer.volume * 100;
            fullVolumeBar && (fullVolumeBar.value = volumeBar.value);
            savePlayerState();
            break;

        /* ---------- SHORTCUT KEYS ---------- */
       case 'm': // mute toggle

        // store last volume
        if (!audioPlayer.dataset.lastVolume) {
            audioPlayer.dataset.lastVolume = audioPlayer.volume;
        }

        if (audioPlayer.muted || audioPlayer.volume === 0) {

            // UNMUTE
            const restoreVol = parseFloat(audioPlayer.dataset.lastVolume) || 0.5;
            audioPlayer.muted = false;
            audioPlayer.volume = restoreVol;

        } else {

            // MUTE
            audioPlayer.dataset.lastVolume = audioPlayer.volume;
            audioPlayer.muted = true;
            audioPlayer.volume = 0;
        }

        // sync sliders
        if (volumeBar) volumeBar.value = audioPlayer.volume * 100;
        if (fullVolumeBar) fullVolumeBar.value = volumeBar.value;

        updateVolumeIcon();
        savePlayerState();
        break;


        case 'n': // next
            playNextSong();
            break;

        case 'p': // previous
            playPrevSong();
            break;

        case 'f': // full player toggle
            if (document.body.classList.contains('full-player-open')) {
                closeAnimatedPlayer();
            } else {
                openAnimatedPlayer();
            }
            break;

        case 'r': // repeat toggle
            repeatBtn?.click();
            break;

        case 's': // shuffle toggle
            shuffleBtn?.click();
            break;
    }
});



/* ===============================
   COPYRIGHT DISCLAIMER (SHOW ONCE)
   =============================== */



(function setupDisclaimerFocusTrap() {
    const overlay = document.getElementById('disclaimer-overlay');
    if (!overlay) return;

    const focusableSelectors = `
        button, [href], input, select, textarea,
        [tabindex]:not([tabindex="-1"])
    `;

    document.addEventListener('keydown', (e) => {
        if (overlay.classList.contains('disclaimer-hidden')) return;

        if (e.key !== 'Tab') return;

        const focusable = overlay.querySelectorAll(focusableSelectors);
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });
})();



// 🔙 GLOBAL BACK HANDLER
window.addEventListener('popstate', () => {

    // 1️⃣ Disclaimer blocks everything
    const overlay = document.getElementById('disclaimer-overlay');
    if (overlay && !overlay.classList.contains('disclaimer-hidden')) {
        history.pushState({ disclaimer:true }, '');
        return;
    }

    // 2️⃣ Full player
    if (document.body.classList.contains('full-player-open')) {
        closeAnimatedPlayer();
        return;
    }

    // 3️⃣ Category modal
    if (categoryModal?.classList.contains('open')) {
        if (categoryModalView === 'songs') {
            renderCategoryGridInModal();
            return;
        }
        closeCategoryModal();
        return;
    }

    // 4️⃣ Albums / Artists → Songs
    if (currentMainView !== 'songs') {
        currentMainView = 'songs';
        renderCurrentView();
        setActiveMainViewButton();
        return;
    }

    // 5️⃣ Filters → Home
    if (currentFilter.type !== 'view' || currentFilter.value !== 'playlist') {
        currentFilter = { type:'view', value:'playlist' };
        currentMainView = 'songs';
        renderCurrentView();
        setActiveFilterClass();
        setActiveMainViewButton();
        return;
    }

});





// === FULL PLAYER CATEGORY SLIDER (SAFE) ===
(function () {
  const row = document.getElementById('full-tabs-row');
  if (!row) return;

  const left = document.querySelector('.full-tabs-arrow.left');
  const right = document.querySelector('.full-tabs-arrow.right');

  left && left.addEventListener('click', () => {
    row.scrollBy({ left: -200, behavior: 'smooth' });
  });

  right && right.addEventListener('click', () => {
    row.scrollBy({ left: 200, behavior: 'smooth' });
  });
})();