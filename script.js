console.log('Manipulating data, this time with nest')

d3.csv('../data/hubway_trips_reduced.csv',parse,dataLoaded);

function dataLoaded(err,rows){

    //Step 1: start with the basics: nest, or group, trips with the same starting stations
    //Using d3.nest()...entries()


    //Step 2: do the same as above, but instead of .entries(), use .map()
    //How does this compare?

    //Step 3: simple two level nest
    //Nest trips with the same starting stations
    //Under each station, further nest trips into two groups: those by registered vs. casual users
    //Hint: casual users are those with no birth date, gender, or zip code information


    //Step 4: simple two level nest
    //Same as above, but instead of returning nested trips as sub-arrays, return two numbers:
    //total count of registered trips, vs. casual trips


    //Step 5: group trips with the same starting stations, BUT only for 2012
    //Do this without crossfilter
    //Hint: first you have to use array.filter() to reduce all trips to a smaller subset
    //Then you nest the smaller array


    //Step 6: do the same, but with crossfilter
    //How does this compare to step 5?






}

function parse(d){
    if(+d.duration<0) return;

    return {
        duration: +d.duration,
        startTime: parseDate(d.start_date),
        endTime: parseDate(d.end_date),
        startStation: d.strt_statn,
        endStation: d.end_statn,
        userAge: d.birth_date?parseDate(d.start_date).getFullYear()- (+d.birth_date):0,
        gender:d.gender? d.gender:"Unknown"
    }
}

function parseDate(date){
    var day = date.split(' ')[0].split('/'),
        time = date.split(' ')[1].split(':');

    return new Date(+day[2],+day[0]-1, +day[1], +time[0], +time[1]);
}

