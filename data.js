// data.js

const INITIAL_SONG_DATA = [
    { 
        id: 1, 
        title: "Aye Mere Hamsafar", 
        artist: "The Best Artist", 
        category: "Hindi", 
        filePath: "songs/aye_mere_hamsafar.mp3",
        coverPath: "covers/aye_mere_hamsafar.jpg",
        isFavorite: false 
    },
    { 
        id: 2, 
        title: "Kisise Tum Payar Karo", 
        artist: "Unknown Talent", 
        category: "Hindi", 
        filePath: "songs/kisise_tum_payar_karo.mp3",
        coverPath: "covers/kisi_se_tum_pyar_kro.jpg",
        isFavorite: false 
    },
    { 
        id: 3, 
        title: "Halka Halka Saroor", 
        artist: "Top Performer", 
        category: "Hindi", 
        filePath: "songs/halka_halka_saroor.mp3",
        coverPath: "covers/halka_halka.jpg",
        isFavorite: false 
    },
    { 
        id: 4, 
        title: "Tujse Mai Pyar Karu", 
        artist: "The Best Artist", 
        category: "Hindi", 
        filePath: "songs/tujhe_mai_pyar_karu.mp3",
        coverPath: "covers/tujse_mai_pyar_karu.jpg",
        isFavorite: false 
    },
    {
        id: 5,
        title: "Yaar Belli",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/yaar_belli.mp3",
        coverPath: "covers/yaar_beli.jpg",
        isFavorite: false
    },
    { 
        id: 6, 
        title: "Ek Ladki Bheegi Bhagi Si", 
        artist: "Top Performer", 
        category: "Hindi", 
        filePath: "songs/ek_ladki_bhegi_bhagi_si.mp3",
        coverPath: "covers/eksi.jpg",
        isFavorite: false 
    },
    { 
        id: 7, 
        title: "To Chalun", 
        artist: "The Best Artist", 
        category: "Hindi", 
        filePath: "songs/to_chalun.mp3",
        coverPath: "covers/to_chalun.jpg",
        isFavorite: false 
    },
    { 
        id: 8, 
        title: "Dil Ke Arman", 
        artist: "Unknown Talent", 
        category: "Hindi", 
        filePath: "songs/dil_ke_arman_ansuon_menn.mp3",
        coverPath: "covers/dil_ke_arman.jpg",
        isFavorite: false 
    },
    { 
        id: 9, 
        title: "Agar Tum Mil Jao", 
        artist: "Top Performer", 
        category: "Hindi", 
        filePath: "songs/agar_tum_mil_jao.mp3",
        coverPath: "covers/agar_tum_mil_jao.jpg",
        isFavorite: false 
    },
    { 
        id: 10, 
        title: "Agar Mai Kahoon", 
        artist: "The Best Artist", 
        category: "Hindi", 
        filePath: "songs/mai_agar_kahoon.mp3",
        coverPath: "covers/mai_agar_kahoon.jpg",
        isFavorite: false 
    },
    { 
        id: 11, 
        title: "Itna Na Mujse Tu Payar Badha", 
        artist: "Unknown Talent", 
        category: "Hindi", 
        filePath: "songs/itna_na_mujse_tu_pyar_badha.mp3",
        coverPath: "covers/itna_na_mujhse_tu_pyar_badha.jpg",
        isFavorite: false 
    },
    { 
        id: 12, 
        title: "Chaaha Hai Tujhko", 
        artist: "Top Performer", 
        category: "Hindi", 
        filePath: "songs/chaaha_hai_tujhko.mp3",
        coverPath: "covers/chaaha_hai_tujhko.jpg",
        isFavorite: false 
    },      
    {
        id: 13,
        title: "Bateu",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/bateu.mp3",
        coverPath: "covers/bateu.jpg",
        isFavorite: false
    },
    {
        id: 14,
        title: "Bhagatt Aadmi",
        artist: "Unknown Talent",
        category: "Haryanavi",
        filePath: "songs/bhagatt_aadmi.mp3",
        coverPath: "covers/bhagatt_aadmi.jpg",
        isFavorite: false
    },
    {
        id: 15,
        title: "Blender",
        artist: "Top Performer",
        category: "Haryanavi",
        filePath: "songs/blender.mp3",
        coverPath: "covers/blender.jpg",
        isFavorite: false
    },
    {
        id: 16,
        title: "Chambal Mein Ferrari",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/chambal_mein_ferrari.mp3",
        coverPath: "covers/chambal_mein_ferrafi.jpg",
        isFavorite: false
    },
    {
        id: 17,
        title: "Izajat",
        artist: "Top Performer",
        category: "Haryanavi",
        filePath: "songs/izajat.mp3",
        coverPath: "covers/ijajat.jpg",
        isFavorite: false
    },
    {
        id: 18,
        title: "Jail Byali",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/jail_byali.mp3",
        coverPath: "covers/jail.jpg",
        isFavorite: false
    },
    {
        id: 19,
        title: "Khatole 2",
        artist: "Unknown Talent",
        category: "Haryanavi",
        filePath: "songs/khatole_2.mp3",
        coverPath: "covers/khatole2.jpg",
        isFavorite: false
    },
    {
        id: 20,
        title: "Mere Mittar",
        artist: "Top Performer",
        category: "Haryanavi",
        filePath: "songs/mere_mittar.mp3",
        coverPath: "covers/mere_mittar.jpg",
        isFavorite: false
    },
    {
        id: 21,
        title: "Raat Ke Shikari",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/raat_ke_shikari.mp3",
        coverPath: "covers/raat_ke_shikari.jpg",
        isFavorite: false
    },
    {
        id: 22,
        title: "Ramayan Ka Saar",
        artist: "Unknown Talent",
        category: "Haryanavi",
        filePath: "songs/ramayan_ka_saar.mp3",
        coverPath: "covers/ramayan_ka_saar.jpg",
        isFavorite: false
    },
    {
        id: 23,
        title: "Sarkaar Ghar Ki",
        artist: "Top Performer",
        category: "Haryanavi",
        filePath: "songs/sarkaar_ghar_ki.mp3",
        coverPath: "covers/sarkaar_ghar_ka.jpg",
        isFavorite: false
    },
    {
        id: 24,
        title: "Tirath Naha Lyange",
        artist: "Top Performer",
        category: "Haryanavi",
        filePath: "songs/tirath_naha_lyange.mp3",
        coverPath: "covers/tirath_naha_lyange.jpg",
        isFavorite: false
    }, 
    {
        id: 25,
        title: "Yarri",
        artist: "Top Performer",
        category: "Haryanavi",
        filePath: "songs/yarri.mp3",
        coverPath: "covers/yaari.jpg",
        isFavorite: false
    },
    { 
        id: 26, 
        title: "1035",
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/1035.mp3",
        coverPath: "covers/1035.jpg",
        isFavorite: false 
    },

    { 
        id: 27, 
        title: "Acquainted", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/acquainted.mp3",
        coverPath: "covers/acquainted.jpg",
        isFavorite: false 
    },    { 
        id: 28, 
        title: "Aeao", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/aeao.mp3",
        coverPath: "covers/aeao.jpg",
        isFavorite: false 
    },    { 
        id: 29, 
        title: "Almost", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/almost.mp3",
        coverPath: "covers/almost.jpg",
        isFavorite: false 
    },    { 
        id: 30, 
        title: "Alone Part 2", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/alone_pt_2.mp3",
        coverPath: "covers/alone.jpg",
        isFavorite: false 
    },    { 
        id: 31, 
        title: "Apocalypse", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/apocalypse.mp3",
        coverPath: "covers/apocalypse.jpg",
        isFavorite: false 
    },    { 
        id: 32, 
        title: "Back To Me", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/back_to_me.mp3",
        coverPath: "covers/back_to_me.jpg",
        isFavorite: false 
    },    { 
        id: 33, 
        title: "Black Space", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/blank_space.mp3",
        coverPath: "covers/blank_space.jpg",
        isFavorite: false 
    },    { 
        id: 34, 
        title: "Blinding Lights", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/blinding_lights.mp3",
        coverPath: "covers/blinding_lights.jpg",
        isFavorite: false 
    },    { 
        id: 35, 
        title: "Call Out My Name", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/call-out_my_name.mp3",
        coverPath: "covers/call_out_my_name.jpg",
        isFavorite: false 
    },    { 
        id: 36, 
        title: "Can't Feel My Face", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/cant_feel_my_face.mp3",
        coverPath: "covers/cant_feel_my_face.jpg",
        isFavorite: false 
    },    { 
        id: 37, 
        title: "Cars Outside", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/cars_outside.mp3",
        coverPath: "covers/cars_outside_james_arthur.jpg",
        isFavorite: false 
    },    { 
        id: 38, 
        title: "Cigarettes Out The Window", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/cigarettes_out_the_window.mp3",
        coverPath: "covers/cigarettes_out_the_window.jpg",
        isFavorite: false 
    },    { 
        id: 39, 
        title: "Come Back To Me", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/come_back_to_me.mp3",
        coverPath: "covers/come_to_me.jpg",
        isFavorite: false 
    },    { 
        id: 40, 
        title: "Dancing In My Room", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/dancing_in_my_room.mp3",
        coverPath: "covers/dancing_in_my_room.jpg",
        isFavorite: false 
    },    { 
        id: 41, 
        title: "Darkside", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/darkside.mp3",
        coverPath: "covers/dark_side.jpg",
        isFavorite: false 
    },    { 
        id: 42, 
        title: "Did I Tell You That I Miss You", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/did_i_tell_u_that_i miss_you.mp3",
        coverPath: "covers/did_i_tell_you_that_i_miss_you.jpg",
        isFavorite: false 
    },    
    { 
        id: 43, 
        title: "Die For You", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/die_for_you.mp3",
        coverPath: "covers/die_for_you.jpg",
        isFavorite: false 
    }, 
    { 
        id: 44, 
        title: "Expresso", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/espresso.mp3",
        coverPath: "covers/espresso.jpg",
        isFavorite: false 
    },     { 
        id: 45, 
        title: "Eyes Don't Lie", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/eyes_dont_lie.mp3",
        coverPath: "covers/eyes_dont_lie.jpg.jpg",
        isFavorite: false 
    },     { 
        id: 46, 
        title: "faded", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/faded.mp3",
        coverPath: "covers/faded.jpg",
        isFavorite: false 
    },     { 
        id: 47, 
        title: "heartless", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/heartless.mp3",
        coverPath: "covers/heartless.jpg",
        isFavorite: false 
    },     { 
        id: 48, 
        title: "Hello", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/hello.mp3",
        coverPath: "covers/hello.jpg",
        isFavorite: false 
    },     { 
        id: 49, 
        title: "Him & I", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/him_and_i.mp3",
        coverPath: "covers/him_&_i.jpg",
        isFavorite: false 
    },     { 
        id: 50, 
        title: "Hotel Room", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/hotel_room.mp3",
        coverPath: "covers/hotel.jpg",
        isFavorite: false 
    },     { 
        id: 51, 
        title: "I Don't Know You ", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/i_don't_know_you.mp3",
        coverPath: "covers/you_dont_know.jpg",
        isFavorite: false 
    },      {
        id: 52,
        title: "Yaane Yaane",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/yaane_yaane.mp3",
        coverPath: "covers/yaane_yaane.jpg",
        isFavorite: false
    }, { 
        id: 53, 
        title: "I Do", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/i_do.mp3",
        coverPath: "covers/i_do.jpg",
        isFavorite: false 
    },     { 
        id: 54, 
        title: "I Lost Myself In Loving You", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/i_lost_myself_in_loving_you.mp3",
        coverPath: "covers/i_lost_myself_in_loving_you.jpg",
        isFavorite: false 
    },     { 
        id: 55, 
        title: "In The Dark", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/in_the_dark.mp3",
        coverPath: "covers/in_the_dark_of_night.jpg",
        isFavorite: false 
    },     { 
        id: 56, 
        title: "Lily", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/lily.mp3",
        coverPath: "covers/lily.jpg",
        isFavorite: false 
    },     { 
        id: 57, 
        title: "Love The Way You Lie", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/love_the_way_you_lie.mp3",
        coverPath: "covers/love_the_way_you_lie.jpg",
        isFavorite: false 
    },     { 
        id: 58, 
        title: "Marvins Room", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/marvins_room.mp3",
        coverPath: "covers/marvins_room.jpg",
        isFavorite: false 
    },     { 
        id: 59, 
        title: "Me Myself & I", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/me_myself_i.mp3",
        coverPath: "covers/me_myself_i.jpg",
        isFavorite: false 
    },     { 
        id: 60, 
        title: "No-One Noticed", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/no_one_noticed.mp3",
        coverPath: "covers/no_one_noticed.jpg",
        isFavorite: false 
    },     { 
        id: 61, 
        title: "Nobody New", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/nobody_new.mp3",
        coverPath: "covers/nobody_new.jpg",
        isFavorite: false 
    },     { 
        id: 62, 
        title: "Not Allowed", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/not_allowed.mp3",
        coverPath: "covers/not_allowed.jpg",
        isFavorite: false 
    },     { 
        id: 63, 
        title: "Nothing Gonna Hurt You Baby", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/nothings_gonna_hurt_you_baby.mp3",
        coverPath: "covers/nothings_gonna_hurt_you_baby.jpg",
        isFavorite: false 
    },     { 
        id: 64, 
        title: "One Call Away", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/one_call_away.mp3",
        coverPath: "covers/one_call_away.jpg",
        isFavorite: false 
    },     { 
        id: 65, 
        title: "Over The Moon", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/over_the_moon.mp3",
        coverPath: "covers/over_the_moon.jpg",
        isFavorite: false 
    },     { 
        id: 66, 
        title: "Paranoia", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/paranoia.mp3",
        coverPath: "covers/paranoia.jpg",
        isFavorite: false 
    },     { 
        id: 67, 
        title: "Please Don't Leave", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/please_dont_leave.mp3",
        coverPath: "covers/please_dont_leave_me.jpg",
        isFavorite: false 
    },     { 
        id: 68, 
        title: "Please Fuck Off", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/please_fuck_off.mp3",
        coverPath: "covers/please_kindly.jpg",
        isFavorite: false 
    },     { 
        id: 69, 
        title: "Rhyme Or Reason", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/rhyme_or_reason.mp3",
        coverPath: "covers/rhyme_or_reason.jpg",
        isFavorite: false 
    },     { 
        id: 70, 
        title: "Roar", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/roar.mp3",
        coverPath: "covers/roar.jpg",
        isFavorite: false 
    },     { 
        id: 71, 
        title: "Royals", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/royals.mp3",
        coverPath: "covers/royals.jpg",
        isFavorite: false 
    },     { 
        id: 72, 
        title: "Say My Name", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/say_my_name.mp3",
        coverPath: "covers/say_my_name.jpg",
        isFavorite: false 
    },     { 
        id: 73, 
        title: "Someone You Love", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/someone_you_loved.mp3",
        coverPath: "covers/someone_you_loved.jpg",
        isFavorite: false 
    },     { 
        id: 74, 
        title: "Somewhere Only We Know", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/somewhere_only_we_know.mp3",
        coverPath: "covers/somewhere_only_we_know.jpg",
        isFavorite: false 
    },     { 
        id: 75, 
        title: "Souvenir", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/souvenir.mp3",
        coverPath: "covers/souvenir.jpg",
        isFavorite: false 
    },     { 
        id: 76, 
        title: "Starboy", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/starboy.mp3",
        coverPath: "covers/starboy.jpg",
        isFavorite: false 
    },     { 
        id: 77, 
        title: "Steal THe Show", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/steal_the_show.mp3",
        coverPath: "covers/steal_the_show.jpg",
        isFavorite: false 
    },     { 
        id: 78, 
        title: "Sunsetz", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/sunsetz.mp3",
        coverPath: "covers/sunset.jpg",
        isFavorite: false 
    },     { 
        id: 79, 
        title: "Sweater Weather", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/sweater_weather.mp3",
        coverPath: "covers/sweater_weather.jpg",
        isFavorite: false 
    },     { 
        id: 80, 
        title: "Tears Of Gold", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/tears_of_gold.mp3",
        coverPath: "covers/tears_of_gold.jpg",
        isFavorite: false 
    },     { 
        id: 81, 
        title: "That Girl", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/that_girl.mp3",
        coverPath: "covers/that_girl.jpg",
        isFavorite: false 
    },     { 
        id: 82, 
        title: "The Drum", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/the_drum.mp3",
        coverPath: "covers/the_drum.jpg",
        isFavorite: false 
    },     { 
        id: 83, 
        title: "The One That Got Away", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/the_one_that_got_away.mp3",
        coverPath: "covers/the_one_that_got_away.jpg",
        isFavorite: false 
    },     { 
        id: 84, 
        title: "True Friends", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/true_friends.mp3",
        coverPath: "covers/true_friends.jpg",
        isFavorite: false 
    },     { 
        id: 85, 
        title: "Unity", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/unity.mp3",
        coverPath: "covers/unity.jpg",
        isFavorite: false 
    },     { 
        id: 86, 
        title: "Where Are You Now", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/where_are_you_now.mp3",
        coverPath: "covers/where_are_you_now.jpg",
        isFavorite: false 
    },     { 
        id: 87, 
        title: "White Horse", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/white_horse.mp3",
        coverPath: "covers/white_horse.jpg",
        isFavorite: false 
    },     { 
        id: 88, 
        title: "You Belong With Me", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/you_belong_with_me.mp3",
        coverPath: "covers/you_belong_with_me.jpg",
        isFavorite: false 
    },
     { 
        id: 89, 
        title: "Tarantella", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/tarantella.mp3",
        coverPath: "covers/tarantella.jpg",
        isFavorite: false 
    },     { 
        id: 90, 
        title: "Friends", 
        artist: "The Best Artist", 
        category: "English", 
        filePath: "songs/friends.mp3",
        coverPath: "covers/friends.jpg",
        isFavorite: false 
    },
    {
        id: 91,
        title: "Aakad",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/aakad.mp3",
        coverPath: "covers/aakad.jpg",
        isFavorite: false
    },
    {
        id: 92,
        title: "Aj Pehli Vaari",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/aj_pehli_vaari.mp3",
        coverPath: "covers/pehli vaari.jpg",
        isFavorite: false
    },
    {
        id: 93,
        title: "Akhiri Mulaqat",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/akhiri_mulaqat.mp3",
        coverPath: "covers/aakhri_mulaqat.jpg",
        isFavorite: false
    },
    {
        id: 94,
        title: "Arrogant",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/arrogant.mp3",
        coverPath: "covers/arrogant.jpg",
        isFavorite: false
    },
    {
        id: 95,
        title: "Boomerang",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/boomerang.mp3",
        coverPath: "covers/boomerang.jpg",
        isFavorite: false
    },
    {
        id: 96,
        title: "Coffee",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/coffee.mp3",
        coverPath: "covers/coffee.jpg",
        isFavorite: false
    },
    {
        id: 97,
        title: "Deadly Combo",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/deadly_combo.mp3",
        coverPath: "covers/deadly_combo.jpg",
        isFavorite: false
    },
    {
        id: 98,
        title: "Desire",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/desire.mp3",
        coverPath: "covers/desire.jpg",
        isFavorite: false
    },
    {
        id: 99,
        title: "Dua",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/dua.mp3",
        coverPath: "covers/dua.jpg",
        isFavorite: false
    },
    {
        id: 100,
        title: "Excuses",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/excuses.mp3",
        coverPath: "covers/excuse.jpg",
        isFavorite: false
    },
    {
        id: 101,
        title: "Goat",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/goat.mp3",
        coverPath: "covers/goat.jpg",
        isFavorite: false
    },
    {
        id: 102,
        title: "Green Tea",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/green_tea.mp3",
        coverPath: "covers/green_tea.jpg",
        isFavorite: false
    },
    {
        id: 103,
        title: "Insane",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/insane.mp3",
        coverPath: "covers/insane.jpg",
        isFavorite: false
    },
    {
        id: 104,
        title: "Jattan De Putt",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/jattan_de_putt.mp3",
        coverPath: "covers/jattan_de_putt.jpg",
        isFavorite: false
    },
    {
        id: 105,
        title: "Jigree",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/jigree.mp3",
        coverPath: "covers/jigri_yaar.jpg",
        isFavorite: false
    },
    {
        id: 106,
        title: "Khaab",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/khaab.mp3",
        coverPath: "covers/khaab.jpg",
        isFavorite: false
    },
    {
        id: 107,
        title: "Love Marriage",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/love_marriage.mp3",
        coverPath: "covers/love_marriage.jpg",
        isFavorite: false
    },
    {
        id: 108,
        title: "Ma Belle",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/ma_belle.mp3",
        coverPath: "covers/ma_bella.jpg",
        isFavorite: false
    },
    {
        id: 109,
        title: "Maa",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/maa.mp3",
        coverPath: "covers/meri_maa.jpg",
        isFavorite: false
    },
    {
        id: 110,
        title: "Majhail",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/majhail.mp3",
        coverPath: "covers/majhail.jpg",
        isFavorite: false
    },
    {
        id: 111,
        title: "Majhe Aale",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/majhe_aale.mp3",
        coverPath: "covers/majhe_aale.jpg",
        isFavorite: false
    },
    {
        id: 112,
        title: "Saada Pyar",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/saada_pyar.mp3",
        coverPath: "covers/saada_pyaar.jpg",
        isFavorite: false
    },
    {
        id: 113,
        title: "Sira",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/sira.mp3",
        coverPath: "covers/siraa.jpg",
        isFavorite: false
    },
    {
        id: 114,
        title: "Spaceship",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/spaceship.mp3",
        coverPath: "covers/spaceship.jpg",
        isFavorite: false
    },
    {
        id: 115,
        title: "Summer High",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/summer_high.mp3",
        coverPath: "covers/summer_high.jpg",
        isFavorite: false
    },
    {
        id: 116,
        title: "Swag",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/swag.mp3",
        coverPath: "covers/swag.jpg",
        isFavorite: false
    },
    {
        id: 117,
        title: "Tere Te",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/tere_te.mp3",
        coverPath: "covers/tere_te.jpg",
        isFavorite: false
    },
    {
        id: 118,
        title: "Tim Hortons",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/tim_hortons.mp3",
        coverPath: "covers/tim_horton.jpg",
        isFavorite: false
    },
    {
        id: 119,
        title: "Toxic",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/toxic.mp3",
        coverPath: "covers/toxic.jpg",
        isFavorite: false
    },
    {
        id: 120,
        title: "Viah",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/viah.mp3",
        coverPath: "covers/viah.jpg",
        isFavorite: false
    },
    {
        id: 121,
        title: "Wangan",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/wangan.mp3",
        coverPath: "covers/wangan.jpg",
        isFavorite: false
    },
    {
        id: 122,
        title: "War",
        artist: "The Best Artist",
        category: "Punjabi",
        filePath: "songs/war.mp3",
        coverPath: "covers/war.jpg",
        isFavorite: false
    },

        {
        id: 123,
        title: "32 Ke Fire",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/32_ke_fire.mp3",
        coverPath: "covers/32_ke_fire.jpg",
        isFavorite: false
    },    {
        id: 124,
        title: "Akad Dada Lai",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/akad_dada_lai.mp3",
        coverPath: "covers/akad_dada_lai.jpg",
        isFavorite: false
    },    {
        id: 125,
        title: "Zindagi Jhand",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/zindagi_jhand.mp3",
        coverPath: "covers/zindagi_jhand.jpg",
        isFavorite: false
    },     {
        id: 126,
        title: "Bahu Chatori",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/bahu_chatori.mp3",
        coverPath: "covers/bahu_chatori.jpg",
        isFavorite: false
    },    {
        id: 127,
        title: "Bhabhi",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/bhabhi.mp3",
        coverPath: "covers/bhabi.jpg",
        isFavorite: false
    },    {
        id: 128,
        title: "Bhaichara",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/bhaichara.mp3",
        coverPath: "covers/bhaichara.jpg",
        isFavorite: false
    },    {
        id: 129,
        title: "Bukkal",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/bukkal.mp3",
        coverPath: "covers/bukkal.jpg",
        isFavorite: false
    },    {
        id: 130,
        title: "Chan Vekhya",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/chan_vekhya.mp3",
        coverPath: "covers/chan_vekhya.jpg",
        isFavorite: false
    },    {
        id: 131,
        title: "Chhora Meri Jaan Se ",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/chhora_meri_jaan_ss.mp3",
        coverPath: "covers/chori_meri_jaan_se.jpg",
        isFavorite: false
    },    {
        id: 132,
        title: "Chichhore",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/chichhore.mp3",
        coverPath: "covers/chichhore.jpg",
        isFavorite: false
    },    {
        id: 133,
        title: "Chunni Mein Perfume",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/chunni_main_perfume.mp3",
        coverPath: "covers/chunni_main_perfume.jpg",
        isFavorite: false
    },    {
        id: 134,
        title: "Cool Mind Balma",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/cool_mind_balma.mp3",
        coverPath: "covers/cool_mind_balama.jpg",
        isFavorite: false
    },    {
        id: 135,
        title: "Danda Deniya",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/danda_deniya.mp3",
        coverPath: "covers/danda_deniya.jpg",
        isFavorite: false
    },    {
        id: 136,
        title: "Darmi Cool 1",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/darmi_cool_1.mp3",
        coverPath: "covers/darmi_cool.jpg",
        isFavorite: false
    },    {
        id: 137,
        title: "Desi",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/desi.mp3",
        coverPath: "covers/desi.jpg",
        isFavorite: false
    },    {
        id: 138,
        title: "Dj Pe Matkungi",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/dj_pe_matkungi.mp3",
        coverPath: "covers/dj_pe_matkungi.jpg",
        isFavorite: false
    },    {
        id: 139,
        title: "Dj Rukna Nahi Chahiye",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/dj_rukna_nahi_chahiye.mp3",
        coverPath: "covers/dj_rukna_nhi_chahiye.jpg",
        isFavorite: false
    },    {
        id: 140,
        title: "Feel Jealous",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/feel_jealous.mp3",
        coverPath: "covers/feel_jelous.jpg",
        isFavorite: false
    },    {
        id: 141,
        title: "FEEM",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/feem_1.mp3",
        coverPath: "covers/feem.jpg",
        isFavorite: false
    },    {
        id: 142,
        title: "Gadan Jogi",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/gadan_jogi.mp3",
        coverPath: "covers/gadan_jogi.jpg",
        isFavorite: false
    },    {
        id: 143,
        title: "Gondi Tara Baap Nu Su Gayu",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/gondi_tara_baap_nu_su_gayu.mp3",
        coverPath: "covers/gondi_teri_bapu_nu_su_gyu.jpg",
        isFavorite: false
    },    {
        id: 144,
        title: "Good Bye Darling",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/good_bye_darling.mp3",
        coverPath: "covers/good_bye_darling.jpg",
        isFavorite: false
    },    {
        id: 145,
        title: "Ha Krde",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/ha_krde.mp3",
        coverPath: "covers/ha_krde.jpg",
        isFavorite: false
    },    {
        id: 146,
        title: "Halka Dupatta Tera",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/halka_dupatta_tera.mp3",
        coverPath: "covers/halka_dupatta.jpg",
        isFavorite: false
    },    {
        id: 147,
        title: "Halke Mai Legi",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/halke_mai_legi.mp3",
        coverPath: "covers/halke_mai_legi.jpg",
        isFavorite: false
    },    {
        id: 148,
        title: "Halki Si Barsaat",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/halki_si_barsaat.mp3",
        coverPath: "covers/halki_si_barsat.jpg",
        isFavorite: false
    },    {
        id: 149,
        title: "Jaan Jaan",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/jaan_jaan.mp3",
        coverPath: "covers/jaan_jaan.jpg",
        isFavorite: false
    },    {
        id: 150,
        title: "Jhanjhar",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/jhanjhar.mp3",
        coverPath: "covers/jhanjar.jpg",
        isFavorite: false
    },    {
        id: 151,
        title: "Khoon Kharaba",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/khoon_kharaba.mp3",
        coverPath: "covers/khoon_kharaba.jpg",
        isFavorite: false
    },    {
        id: 152,
        title: "Lambi Lambi Chori 2",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/lambi_lambi_chori_2.mp3",
        coverPath: "covers/lambi_lambi_chori_2.jpg",
        isFavorite: false
    },    {
        id: 153,
        title: "Legend Never Ends",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/legend_never_end.mp3",
        coverPath: "covers/legend_never_end.jpg",
        isFavorite: false
    },    {
        id: 154,
        title: "Loktath",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/loktath.mp3",
        coverPath: "covers/loktath.jpg",
        isFavorite: false
    },    {
        id: 155,
        title: "Loot Liya Haryana",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/loot_liya_haryana.mp3",
        coverPath: "covers/loot_liya_haryana.jpg",
        isFavorite: false
    },    {
        id: 156,
        title: "Love Route",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/love_route.mp3",
        coverPath: "covers/love_route.jpg",
        isFavorite: false
    },    {
        id: 157,
        title: "Lungaad",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/lungaad.mp3",
        coverPath: "covers/lungaad.jpg",
        isFavorite: false
    },    {
        id: 158,
        title: "Mathu Ram Ki Jalebi",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/mathu_ram_ki_jalebi.mp3",
        coverPath: "covers/mathu_ram_ki_jalabi.jpg",
        isFavorite: false
    },    {
        id: 159,
        title: "Mhashya Ji",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/mhashya_ji.mp3",
        coverPath: "covers/mhashya_ji.jpg",
        isFavorite: false
    },    {
        id: 160,
        title: "Middle Finger",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/middle_finger.mp3",
        coverPath: "covers/middle_finger.jpg",
        isFavorite: false
    },    {
        id: 161,
        title: "Naagni",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/nagni.mp3",
        coverPath: "covers/nagni.jpg",
        isFavorite: false
    },    {
        id: 162,
        title: "Nilli Ankh",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/nilli_ankh.mp3",
        coverPath: "covers/nilli_aank.jpg",
        isFavorite: false
    },    {
        id: 163,
        title: "One Man Army",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/one_man_army.mp3",
        coverPath: "covers/one_man_army.jpg",
        isFavorite: false
    },    {
        id: 164,
        title: "Pankha BIjli Ka",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/pankha_bijli_ka.mp3",
        coverPath: "covers/pankha_bijli_ka.jpg",
        isFavorite: false
    },    {
        id: 165,
        title: "PCR",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/pcr.mp3",
        coverPath: "covers/pcr.jpg",
        isFavorite: false
    },    {
        id: 166,
        title: "Raakshas",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/raakshas.mp3",
        coverPath: "covers/rakshaj.jpg",
        isFavorite: false
    },    {
        id: 167,
        title: "Rohtakiya",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/rohtakiya.mp3",
        coverPath: "covers/rohtakiya.jpg",
        isFavorite: false
    },    {
        id: 168,
        title: "Sanjha Geet",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/sanjha_geet.mp3",
        coverPath: "covers/sajha_geet.jpg",
        isFavorite: false
    },    {
        id: 169,
        title: "Shikanji Pilyo Saiyaan Ji",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/shikanji_pilyo_saiyaan_ji.mp3",
        coverPath: "covers/shikanji_piliyeke_saiyya_ji.jpg",
        isFavorite: false
    },    {
        id: 170,
        title: "Shiv Lehar",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/shiv_lehar.mp3",
        coverPath: "covers/shiv_lehar.jpg",
        isFavorite: false
    },    {
        id: 171,
        title: "Shiva The Damru Ala",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/shiva_the_damru_ala.mp3",
        coverPath: "covers/shiva.jpg",
        isFavorite: false
    },    {
        id: 172,
        title: "Shukar Mana",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/shukar_mana.mp3",
        coverPath: "covers/shukar_mana.jpg",
        isFavorite: false
    },    {
        id: 173,
        title: "Simple Life",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/simple_life.mp3",
        coverPath: "covers/simple_life.jpg",
        isFavorite: false
    },
    {
        id: 174,
        title: "Sunne Sunne Per",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/sunne_sunne_per.mp3",
        coverPath: "covers/sunne_sunne_pair.jpg",
        isFavorite: false
    },    {
        id: 175,
        title: "System",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/system.mp3",
        coverPath: "covers/system.jpg",
        isFavorite: false
    },    {
        id: 176,
        title: "Teri Aali Cheli",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/tere_aali_cheli.mp3",
        coverPath: "covers/tere_aali_cheli.jpg",
        isFavorite: false
    },    {
        id: 177,
        title: "Tu Aake Dekhle",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/tu_aake_dekhle.mp3",
        coverPath: "covers/tu_aake_dekhle.jpg",
        isFavorite: false
    },    {
        id: 178,
        title: "Tution Badmashi Kaa",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/tuition_badmashi_kaa.mp3",
        coverPath: "covers/tution_badmashi_ka.jpg",
        isFavorite: false
    },    {
        id: 179,
        title: "Tukda Dil Ka",
        artist: "The Best Artist",
        category: "Haryanavi",
        filePath: "songs/tukda_dil_ka.mp3",
        coverPath: "covers/tukda_dil_ka_2.jpg",
        isFavorite: false
    },
        {
        id: 180,
        title: "Yeh Ek Zindagi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/yeh_ek_zindagi.mp3",
        coverPath: "covers/ye_ek_zindagi_kafi_nhi_hai.jpg",
        isFavorite: false
    },

    {
        id: 181,
        title: "Aakhir Kyun",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/aakhir_kyun.mp3",
        coverPath: "covers/aakhir_kyu.jpg",
        isFavorite: false
    },
    {
        id: 182,
        title: "Aakhir Kyun 2",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/aakhir_kyun2.mp3",
        coverPath: "covers/aakhir_kyu_2.jpg",
        isFavorite: false
    },
    {
        id: 183,
        title: "Aayi Aayi Bhoot Police",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/aayi_aayi_bhoot_police.mp3",
        coverPath: "covers/aye_aye_bhootpolice.jpg",
        isFavorite: false
    },
    {
        id: 184,
        title: "Ae Dil Hai MushkiL",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ae_dil_hai_mushkil.mp3",
        coverPath: "covers/ae_dil_hai_muskil.jpg",
        isFavorite: false
    },
    {
        id: 185,
        title: "Aila Re Aillaa",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/aila_re_aillaa.mp3",
        coverPath: "covers/aila_re_aillaa.jpg",
        isFavorite: false
    },
    {
        id: 186,
        title: "Ambo Ambambo",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ambo_ambambo.mp3",
        coverPath: "covers/ambo_ambambo.jpg",
        isFavorite: false
    },
    {
        id: 187,
        title: "Amma Amma",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/amma_amma.mp3",
        coverPath: "covers/amma_amma.jpg",
        isFavorite: false
    },
    {
        id: 188,
        title: "Ankhein Mili",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ankhein_mili.mp3",
        coverPath: "covers/ankhei_mili.jpg",
        isFavorite: false
    },
    {
        id: 189,
        title: "Athira Ravil",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/athira_ravil.mp3",
        coverPath: "covers/athira_ravil.jpg",
        isFavorite: false
    },
    {
        id: 190,
        title: "Baarish Lete Aana",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/baarish_lete_aana.mp3",
        coverPath: "covers/baarish_lete_aana.jpg",
        isFavorite: false
    },
    {
        id: 191,
        title: "Bachpan Ka Pyaar",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/bachpan_ka_pyaar.mp3",
        coverPath: "covers/baarish_lete_aana.jpg",
        isFavorite: false
    },
    {
        id: 192,
        title: "Barsaat Ki Dhun",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/barsaat_ki_dhun.mp3",
        coverPath: "covers/bharsat_ki_dhun.jpg",
        isFavorite: false
    },
    {
        id: 193,
        title: "Besharam Rang",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/besharam_rang.mp3",
        coverPath: "covers/besharam_rang.jpg",
        isFavorite: false
    },
    {
        id: 194,
        title: "Bhai Bhai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/bhai_bhai.mp3",
        coverPath: "covers/bhai_bhai.jpg",
        isFavorite: false
    },
    {
        id: 195,
        title: "Bhai Ka Birthday",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/bhai_ka_birthday.mp3",
        coverPath: "covers/bhai_ka_birthday.jpg",
        isFavorite: false
    },
    {
        id: 196,
        title: "Bijli",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/bijli.mp3",
        coverPath: "covers/bijli.jpg",
        isFavorite: false
    },
    {
        id: 197,
        title: "Boom Padi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/boom_padi.mp3",
        coverPath: "covers/boom_padi.jpg",
        isFavorite: false
    },
    {
        id: 198,
        title: "Bulleya",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/bulleya.mp3",
        coverPath: "covers/bulleya.jpg",
        isFavorite: false
    },
    {
        id: 199,
        title: "Bye Bye Adios",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/bye_bye_adios.mp3",
        coverPath: "covers/bye_bye_adios.jpg",
        isFavorite: false
    },
    {
        id: 200,
        title: "Chinta Ta Ta Chita Chita",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/chinta_ta_ta_chita_chita.mp3",
        coverPath: "covers/cinta_ta_cita_cita.jpg",
        isFavorite: false
    },
    {
        id: 201,
        title: "Dance Ka Bhoot",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dance_ka_bhoot.mp3",
        coverPath: "covers/dance_ka_bhooot.jpg",
        isFavorite: false
    },
    {
        id: 202,
        title: "Dhindhora Baje Re",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dhindhora_baje_re.mp3",
        coverPath: "covers/dhindira_bja_re.jpg",
        isFavorite: false
    },
    {
        id: 203,
        title: "Dhoke Pyaar Ke",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dhoke_pyaar_ke.mp3",
        coverPath: "covers/dhoke_pyar_ke.jpg",
        isFavorite: false
    },
    {
        id: 204,
        title: "Dhol Bajaa",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dhol_bajaa.mp3",
        coverPath: "covers/dhol_bjaa.jpg",
        isFavorite: false
    },
    {
        id: 205,
        title: "Dhoom Tara",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dhoom_tara.mp3",
        coverPath: "covers/dhoom_tara.jpg",
        isFavorite: false
    },
    {
        id: 206,
        title: "Dil Ka Telephone",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dil_ka_telephone.mp3",
        coverPath: "covers/dil_ka_telephone.jpg",
        isFavorite: false
    },
    {
        id: 207,
        title: "Dil Ka Telephone2",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/dil_ka_telephone2.mp3",
        coverPath: "covers/dil_ka_telephone_2.jpg",
        isFavorite: false
    },
    {
        id: 208,
        title: "Do Ghoont",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/do_ghoont.mp3",
        coverPath: "covers/do_ghoont.jpg",
        isFavorite: false
    },
    {
        id: 209,
        title: "Ek Tarfa",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ek_tarfa.mp3",
        coverPath: "covers/ek_tarfa.jpg",
        isFavorite: false
    },
    {
        id: 210,
        title: "Farsh Pe Khade",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/farsh_pe_khade.mp3",
        coverPath: "covers/farsh_pe_kadhe.jpg",
        isFavorite: false
    },
    {
        id: 211,
        title: "Garda",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/garda.mp3",
        coverPath: "covers/garda.jpg",
        isFavorite: false
    },
    {
        id: 212,
        title: "Ghodey Pe Sawaar",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ghodey_pe_sawaar.mp3",
        coverPath: "covers/ghode_pe_swar.jpg",
        isFavorite: false
    },
    {
        id: 213,
        title: "Zaalima Coca Cola",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/zaalima_coca_cola.mp3",
        coverPath: "covers/zaalima.jpg",
        isFavorite: false
    },
    {
        id: 214,
        title: "Goli Maar Bheje Mein",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/goli_maar_bheje_mein.mp3",
        coverPath: "covers/goli_mar_bheje_me.jpg",
        isFavorite: false
    },
    {
        id: 215,
        title: "Hanjugam",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/hanjugam.mp3",
        coverPath: "covers/hanjugam.jpg",
        isFavorite: false
    },
    {
        id: 216,
        title: "Heart Throb",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/heart_throb.mp3",
        coverPath: "covers/heart_thobr.jpg",
        isFavorite: false
    },
    {
        id: 217,
        title: "Tu Heer Meri",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/heer_tu_meri.mp3",
        coverPath: "covers/tu_heer_meri.jpg",
        isFavorite: false
    },
    {
        id: 218,
        title: "Hills Of Malabar",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/hills_of_malabar.mp3",
        coverPath: "covers/hills_of_malabar.jpg",
        isFavorite: false
    },
    {
        id: 219,
        title: "Hututu",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/hututu.mp3",
        coverPath: "covers/hututututututututuututututu.jpg",
        isFavorite: false
    },
    {
        id: 220,
        title: "Ishq Mein",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ishq_mein.mp3",
        coverPath: "covers/ishq_me.jpg",
        isFavorite: false
    },
    {
        id: 221,
        title: "Jaihind Ki Senaa",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/jaihind_ki_senaa.mp3",
        coverPath: "covers/jai_hind_ki_sena.jpg",
        isFavorite: false
    },
    {
        id: 222,
        title: "Jee Len De",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/jee_len_de.mp3",
        coverPath: "covers/jee_len_de.jpg",
        isFavorite: false
    },
    {
        id: 223,
        title: "Kabhii Tumhhe",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kabhii_tumhhe.mp3",
        coverPath: "covers/kabhi_tumhre.jpg",
        isFavorite: false
    },
    {
        id: 224,
        title: "Kabhii Tumhhe2",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kabhii_tumhhe2.mp3",
        coverPath: "covers/kabhi_tumhre.jpg",
        isFavorite: false
    },
    {
        id: 225,
        title: "Kacchi Doriyaan",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kacchi_doriyaan.mp3",
        coverPath: "covers/kacchi_doriya.jpg",
        isFavorite: false
    },
    {
        id: 226,
        title: "Kaho Na Pyar Hai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kaho_na_pyar_hai.mp3",
        coverPath: "covers/kaho_na_pyar_hai.jpg",
        isFavorite: false
    },
    {
        id: 227,
        title: "Kar Har Maidaan Fateh",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kar_har_maidaan_fateh.mp3",
        coverPath: "covers/kar_har_maidan.jpg",
        isFavorite: false
    },
    {
        id: 228,
        title: "Kesariya",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kesariya.mp3",
        coverPath: "covers/kesariya.jpg",
        isFavorite: false
    },
    {
        id: 229,
        title: "Khairiyat",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/khairiyat.mp3",
        coverPath: "covers/khariyat.jpg",
        isFavorite: false
    },
    {
        id: 230,
        title: "Kudmayi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kudmayi.mp3",
        coverPath: "covers/khudmay.jpg",
        isFavorite: false
    },
    {
        id: 231,
        title: "Kya Loge Tum",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/kya_loge_tum.mp3",
        coverPath: "covers/kya_lgo_tum.jpg",
        isFavorite: false
    },
    {
        id: 232,
        title: "Love You So Much",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/love_you_so_much.mp3",
        coverPath: "covers/love_you_so_mch.jpg",
        isFavorite: false
    },
    {
        id: 233,
        title: "Maa",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/maa.mp3",
        coverPath: "covers/maa.jpg",
        isFavorite: false
    },
    {
        id: 234,
        title: "Main Khiladi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/main_khiladi.mp3",
        coverPath: "covers/mai_khiladi.jpg",
        isFavorite: false
    },
    {
        id: 235,
        title: "Mann Bharryaa",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/mann_bharryaa.mp3",
        coverPath: "covers/man_bhraya_2.jpg",
        isFavorite: false
    },
    {
        id: 236,
        title: "Marjaawaan",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/marjaawaan.mp3",
        coverPath: "covers/marjava.jpg",
        isFavorite: false
    },
    {
        id: 237,
        title: "Milo Na Tum",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/milo_na_tum.mp3",
        coverPath: "covers/milo_na_tum.jpg",
        isFavorite: false
    },
    {
        id: 238,
        title: "Mujhe Pyaar Pyaar Hai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/mujhe_pyaar_pyaar_hai.mp3",
        coverPath: "covers/mujhe_pyar_pyar_hai.jpg",
        isFavorite: false
    },
    {
        id: 239,
        title: "Naaraazgi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/naaraazgi.mp3",
        coverPath: "covers/narazgi.jpg",
        isFavorite: false
    },
    {
        id: 240,
        title: "O Yaara Dil Lagaana",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/o_yaara_dil_lagaana.mp3",
        coverPath: "covers/o_yaara_dil_lgana.jpg",
        isFavorite: false
    },
    {
        id: 241,
        title: "Oonchi Oonchi Waadi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/oonchi_oonchi_waadi.mp3",
        coverPath: "covers/uchi_uchi_wadi.jpg",
        isFavorite: false
    },
    {
        id: 242,
        title: "Pachtaoge",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/pachtaoge.mp3",
        coverPath: "covers/pctoge.jpg",
        isFavorite: false
    },
    {
        id: 243,
        title: "Pagal Parindey",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/pagal_parindey.mp3",
        coverPath: "covers/pgl_prindey.jpg",
        isFavorite: false
    },
    {
        id: 244,
        title: "Pal Pal Dil Ke Paas",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/pal_pal_dil_ke_paas.mp3",
        coverPath: "covers/pal_pal_dil_ke_pass.jpg",
        isFavorite: false
    },
    {
        id: 245,
        title: "Param Sundari",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/param_sundari.mp3",
        coverPath: "covers/param_sundri.jpg",
        isFavorite: false
    },
    {
        id: 246,
        title: "Phuljhadiyon",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/phuljhadiyon.mp3",
        coverPath: "covers/phuljdiyo.jpg",
        isFavorite: false
    },
    {
        id: 247,
        title: "Pyaar Aata Hai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/pyaar_aata_hai.mp3",
        coverPath: "covers/pyar_aata_hai.jpg",
        isFavorite: false
    },
    {
        id: 248,
        title: "Raataan Lambiyan",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/raataan_lambiyan.mp3",
        coverPath: "covers/raataan_lambiyan.jpg",
        isFavorite: false
    },
    {
        id: 249,
        title: "Rait Zara Si",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/rait_zara_si.mp3",
        coverPath: "covers/rait_zara_si.jpg",
        isFavorite: false
    },
    {
        id: 250,
        title: "Rangeeni",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/rangeeni.mp3",
        coverPath: "covers/rangeeni.jpg",
        isFavorite: false
    },
    {
        id: 251,
        title: "Rasiya",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/rasiya.mp3",
        coverPath: "covers/rasiya.jpg",
        isFavorite: false
    },
    {
        id: 252,
        title: "Rihaayi De",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/rihaayi_de.mp3",
        coverPath: "covers/rihaayi_de.jpg",
        isFavorite: false
    },
    {
        id: 253,
        title: "Ro Lain De",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ro_lain_de.mp3",
        coverPath: "covers/ro_lain_de.jpg",
        isFavorite: false
    },
    {
        id: 254,
        title: "Rock A Bye Baby",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/rock_a_bye_baby.mp3",
        coverPath: "covers/rock_a_boy_baby.jpg",
        isFavorite: false
    },
    {
        id: 255,
        title: "Bad Boy",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/saaho_bad_boy.mp3",
        coverPath: "covers/bad_boy.jpg",
        isFavorite: false
    },
    {
        id: 256,
        title: "Sakhiyan",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/sakhiyan.mp3",
        coverPath: "covers/sakhiyan.jpg",
        isFavorite: false
    },
    {
        id: 257,
        title: "Barish",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/shashaa_tirupati.mp3",
        coverPath: "covers/sarish.jpg",
        isFavorite: false
    },
    {
        id: 258,
        title: "Shiva Theme",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/shiva_theme.mp3",
        coverPath: "covers/shiva_theme.jpg",
        isFavorite: false
    },
    {
        id: 259,
        title: "Suna Hai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/suna_hai.mp3",
        coverPath: "covers/suna_hai.jpg",
        isFavorite: false
    },
    {
        id: 260,
        title: "Suno Jaanejaan",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/suno_jaanejaan.mp3",
        coverPath: "covers/suno_jaanejaan.jpg",
        isFavorite: false
    },
    {
        id: 261,
        title: "Teri Meri Kahani",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/teri_meri_kahani.mp3",
        coverPath: "covers/teri_meri_kahaani.jpg",
        isFavorite: false
    },
    {
        id: 262,
        title: "Tip Tip",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/tip_tip.mp3",
        coverPath: "covers/tip_tip.jpg",
        isFavorite: false
    },
    {
        id: 263,
        title: "Toofan Si Kudi",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/toofan_si_kudi.mp3",
        coverPath: "covers/toofan_si_kudi.jpg",
        isFavorite: false
    },
    {
        id: 264,
        title: "Tu Mila To Hai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/tu_mila.mp3",
        coverPath: "covers/tu_mila_to_haina.jpg",
        isFavorite: false
    },
    {
        id: 265,
        title: "Tum Kbb Aaogey",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/tum_aaogey.mp3",
        coverPath: "covers/tum_kbb_aaoge.jpg",
        isFavorite: false
    },
    {
        id: 266,
        title: "Tum Kya Mile",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/tum_kya_mile.mp3",
        coverPath: "covers/tum_kya_mile.jpg",
        isFavorite: false
    },
    {
        id: 267,
        title: "Choti Si Chiraiya",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/choti_si_chiraiya.mp3",
        coverPath: "covers/chooti_se_chriyaaa.jpg",
        isFavorite: false
    },
    {
        id: 268,
        title: "Tum Mere",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/tum_mere.mp3",
        coverPath: "covers/tum_mere.jpg",
        isFavorite: false
    },
    {
        id: 269,
        title: "Tumse Pyaar Hai",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/tumse_pyaar_hai.mp3",
        coverPath: "covers/tumse_pyar_hai.jpg",
        isFavorite: false
    },
    {
        id: 270,
        title: "Udd Jaa Kaale Kaava",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/udd_jaa_kaale_kaava.mp3",
        coverPath: "covers/udd_ja_kale_kawa.jpg",
        isFavorite: false
    },
    {
        id: 271,
        title: "Vande Mataram",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/vande_mataram.mp3",
        coverPath: "covers/vande_mataram.jpg",
        isFavorite: false
    },
    {
        id: 272,
        title: "Ve Kamleya",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/ve_kamleya.mp3",
        coverPath: "covers/ve_kamleya.jpg",
        isFavorite: false
    },
    {
        id: 273,
        title: "Walla Walla",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/walla_walla.mp3",
        coverPath: "covers/walla_walla.jpg",
        isFavorite: false
    },
    {
        id: 274,
        title: "What Jhumka",
        artist: "The Best Artist",
        category: "Hindi",
        filePath: "songs/what_jhumka.mp3",
        coverPath: "covers/what_jhumka.jpg",
        isFavorite: false
    },


];