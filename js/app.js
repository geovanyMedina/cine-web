;$(function(){
    function momentDateFormatter(date, dateString) {
        return moment(dateString).fromNow();
    }

    try {
        if($("#fastandfurious_7").length) {
            twitterFetcher.fetch({
                "id": '605226995308298240',
                "domId": 'fastandfurious_7',
                "maxTweets": 10,
                "enableLinks": true,
                "showUser": false,
                "showTime": true,
                "dateFunction": momentDateFormatter,
                "showRetweet": false
            });
        }
        else if($("#50_shades_of_grey").length) {
            twitterFetcher.fetch({
                "id": '605240713970786304',
                "domId": '50_shades_of_grey',
                "maxTweets": 10,
                "enableLinks": true,
                "showUser": false,
                "showTime": true,
                "dateFunction": momentDateFormatter,
                "showRetweet": false
            });
        }
        else if($("#age_of_ultron").length) {
            twitterFetcher.fetch({
                "id": '605242756965888000',
                "domId": 'age_of_ultron',
                "maxTweets": 10,
                "enableLinks": true,
                "showUser": false,
                "showTime": true,
                "dateFunction": momentDateFormatter,
                "showRetweet": false
            });
        }
    } catch(e) {
        console.error(e);
    }
});