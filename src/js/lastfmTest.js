var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey  : 'b04e6db73ce28ee896e3ddd5a332466d',
    apiSecret   : 'fdcea5731fa297b5e55cfd6386ff52c9',
    cache   : cache
});

lastfm.artist.getInfo({artist: 'the xx'}, {success: function(data){

}, error: function(code, message){

}})

console.log(function(data){});