module.exports = {
  post: [
    '<div class="post col-xs-12">',
    '<div class ="info col-xs-7">',
    '<h3><%= name %></h3>',
    '<h5><%= address %></h5>',
    '<h5><%= phone %></h5>',
    '<% if(onMonday) { %>',
    '<span>M </span>',
    '<% } %>',
    '<% if(onTuesday) { %>',
    '<span>Tu </span>',
    '<% } %>',
    '<% if(onWednesday) { %>',
    '<span>W </span>',
    '<% } %>',
    '<% if(onThursday) { %>',
    '<span>Th </span>',
    '<% } %>',
    '<% if(onFriday) { %>',
    '<span>F </span>',
    '<% } %>',
    '<% if(onSaturday) { %>',
    '<span>Sa </span>',
    '<% } %>',
    '<% if(onSunday) { %>',
    '<span>Su </span>',
    '<% } %>',
    '</div>',
    '<div class="icon col-xs-5">',
    '<img class="iconImg" src="<%= image %>" alt="" />',
    '</div>',
    '<div class="info col-xs-12">',
    '<p><%= startTime %> to <%= endTime %></p>',
    '<p><%= specials %></p>',
    '<button class="delete btn btn-default btn-sm" role="button"">DELETE</button>',
    '</div>',
    '</div>'
  ].join(''),

  create: [
    '<form class="">',
      '<h3>Add a Happy Hour!</h3>',
      '<input class="form-control" placeholder="Restaurant Name" type="text" name="name" value="">',
      '<input class="form-control" placeholder="Address" type="text" name="address" value="">',
      '<input class="form-control" placeholder="Phone Number" type="text" name="phone" value="">',
      '<h5>Choose Neighborhood</h5>',
      '<div class="searchCity">',
      '<select class="form-control" name="cityPick" id="cityPick">',
        '<option value="downtown">Downtown</option>',
        '<option value="mtPleasant">Mt. Pleasant</option>',
        '<option value="westAshley">West Ashley</option>',
        '<option value="parkCircle">Park Circle</option>',
        '<option value="follyBeach">Folly Beach</option>',
        '<option value="iop">Isle Of Palms</option>',
        '<option value="sullivans">Sullivans Island</option>',
        '<option value="summerville">Summerville</option>',
        '<option value="jamesIsland">James Island</option>',
      '</select>',
      '</div>',
      '<input class="form-control" placeholder="Start time" type="text" name="startTime">',
      '<input class="form-control" placeholder="End time" type="text" name="endTime">',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onMonday">Monday</label>',
      '</div>',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onTuesday">Tuesday</label>',
      '</div>',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onWednesday">Wednesday</label>',
      '</div>',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onThursday">Thursday</label>',
      '</div>',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onFriday">Friday</label>',
      '</div>',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onSaturday">Saturday</label>',
      '</div>',
      '<div class="checkbox">',
      '<label><input type="checkbox" name="onSunday">Sunday</label>',
      '</div>',
      '<input class="form-control" placeholder="Happy Hour Speacials"type="text" name="specials" value="">',
      '<input class="form-control" placeholder="Image"type="text" name="image" value="">',
      '<button class="btn btn-default btn-md" role="button" type="submit" name="create">SUBMIT</button>',
    '</form>'
  ].join(''),

nameSearch: [
  '<form class="">',
    '<input type="text" name="name" placeholder="Search By Restaurant">',
    '<button type="submit" name="search">Search</button>',
  '</form>'

].join(''),

// citySearch with bootsrtap included
citySearch: [
  '<div class="citySearch" role="group" arial-label>',
    '<div class="clicked" data-city="all">All</div>',
    '<div data-city="downtown">Downtown</div>',
    '<div data-city="mtPleasant">Mt. Pleasant</div>',
    '<div data-city="westAshley">West Ashley</div>',
    '<div data-city="parkCircle">Park Circle</div>',
    '<div data-city="follyBeach">Folly Beach</div>',
    '<div data-city="iop">Isle Of Palms</div>',
    '<div data-city="sullivans">Sullivans Island</div>',
    '<div data-city="summerville">Summerville</div>',
    '<div data-city="jamesIsland">James Island</div>',
  '</div>'
].join(''),
}


//** THIS WAS THE ORIGINAL TEMPLATE IF WE NEED TO GO BACK **

// create: [
//   '<form class="">',
//     '<h3>Add a Happy Hour!</h3>',
//     '<input placeholder="Restaurant Name"type="text" name="name" value="">',
//     '<input placeholder="Address"type="text" name="address" value="">',
//     '<input placeholder="Phone Number"type="text" name="phone" value="">',
//     '<select class="form-control" name="cityPick" id="cityPick">',
//       '<option value="">Choose Neighborhood</option>',
//       '<option value="downtown">Downtown</option>',
//       '<option value="mtPleasant">Mt. Pleasant</option>',
//       '<option value="westAshley">West Ashley</option>',
//       '<option value="parkCircle">Park Circle</option>',
//       '<option value="follyBeach">Folly Beach</option>',
//       '<option value="iop">Isle Of Palms</option>',
//       '<option value="sullivans">Sullivans Island</option>',
//       '<option value="summerville">Summerville</option>',
//       '<option value="jamesIsland">James Island</option>',
//     '</select>',
//     '<label for="startTime">Select a start time</label>',
//     '<input type="text" name="startTime">',
//     '<label for="endTime">Select an end time</label>',
//     '<input type="text" name="endTime">',
//     '<input type="checkbox" name="onMonday">',
//     '<label for="onMonday">Monday</label>',
//     '<input type="checkbox" name="onTuesday">',
//     '<label for="onTuesday">Tuesday</label>',
//     '<input type="checkbox" name="onWednesday">',
//     '<label for="onWednesday">Wednesday</label>',
//     '<input type="checkbox" name="onThursday">',
//     '<label for="onThursday">Thursday</label>',
//     '<input type="checkbox" name="onFriday">',
//     '<label for="onFriday">Friday</label>',
//     '<input type="checkbox" name="onSaturday">',
//     '<label for="onSaturday">Saturday</label>',
//     '<input type="checkbox" name="onSunday">',
//     '<label for="onSunday">Sunday</label>',
//     '<input placeholder="Happy Hour Speacials"type="text" name="specials" value="">',
//     '<input placeholder="Image"type="text" name="image" value="">',
//     '<button type="submit" name="create">SUBMIT</button>',
//   '</form>'
// ].join(''),


// citySearch: [
//   '<div name="citySearch" id="citySearch">',
//     '<h3 data-city="downtown">Downtown</h3>',
//     '<h3 data-city="mtPleasant">Mt. Pleasant</h3>',
//     '<h3 data-city="westAshley">West Ashley</h3>',
//     '<h3 data-city="parkCircle">Park Circle</h3>',
//     '<h3 data-city="follyBeach">Folly Beach</h3>',
//     '<h3 data-city="iop">Isle Of Palms</h3>',
//     '<h3 data-city="sullivans">Sullivans Island</h3>',
//     '<h3 data-city="summerville">Summerville</h3>',
//     '<h3 data-city="jamesIsland">James Island</h3>',
//   '</div>'
// ].join('')
// }


//** THIS WAS PRACTICE, I THINK **
// '<form class="">',
//   '<h3>Search for a Happy Hour!</h3>',
//   '<input placeholder="Restaurant Name"type="text" name="name" value="">',
//   '<input type="checkbox" name="onMonday">',
//   '<label for="onMonday">Monday</label>',
//   '<input type="checkbox" name="onTuesday">',
//   '<label for="onTuesday">Tuesday</label>',
//   '<input type="checkbox" name="onWednesday">',
//   '<label for="onWednesday">Wednesday</label>',
//   '<input type="checkbox" name="onThursday">',
//   '<label for="onThursday">Thursday</label>',
//   '<input type="checkbox" name="onFriday">',
//   '<label for="onFriday">Friday</label>',
//   '<input type="checkbox" name="onSaturday">',
//   '<label for="onSaturday">Saturday</label>',
//   '<input type="checkbox" name="onSunday">',
//   '<label for="onSunday">Sunday</label>',
// '</form>'
