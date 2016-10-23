"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _pugFlattenInnerHelper(arr, val) {
  return arr.concat(Array.isArray(val) ? _pugFlatten(val) : val);
}

function _pugFlatten(arr) {
  return arr.reduce(_pugFlattenInnerHelper, []);
}

var athletes = [{
  'id': 'driulis-gonzalez',
  'name': 'Driulis González',
  'country': 'cu',
  'birth': '1973',
  'image': 'driulis-gonzalez.jpg',
  'cover': 'driulis-gonzalez-cover.jpg',
  'link': 'https://en.wikipedia.org/wiki/Driulis_González',
  'medals': [{ 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' }, { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' }, { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' }, { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' }, { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' }, { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' }, { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' }, { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' }, { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' }, { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' }, { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' }, { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' }, { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' }, { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' }, { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' }, { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' }]
}, {
  'id': 'mark-huizinga',
  'name': 'Mark Huizinga',
  'country': 'nl',
  'birth': '1973',
  'image': 'mark-huizinga.jpg',
  'cover': 'mark-huizinga-cover.jpg',
  'link': 'https://en.wikipedia.org/wiki/Mark_Huizinga',
  'medals': [{ 'year': '1994', 'type': 'B', 'city': 'Gdansk', 'event': 'European Championships', 'category': '-78kg' }, { 'year': '1996', 'type': 'B', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-86kg' }, { 'year': '1996', 'type': 'G', 'city': 'The Hague', 'event': 'European Championships', 'category': '-86kg' }, { 'year': '1997', 'type': 'G', 'city': 'Oostende', 'event': 'European Championships', 'category': '-86kg' }, { 'year': '1998', 'type': 'G', 'city': 'Oviedo', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '1999', 'type': 'B', 'city': 'Bratislava', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2000', 'type': 'G', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-90kg' }, { 'year': '2000', 'type': 'S', 'city': 'Wroclaw', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2001', 'type': 'G', 'city': 'Paris', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2002', 'type': 'B', 'city': 'Maribor', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2003', 'type': 'B', 'city': 'Düsseldorf', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-90kg' }, { 'year': '2004', 'type': 'S', 'city': 'Bucharest', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-90kg' }, { 'year': '2005', 'type': 'B', 'city': 'Rotterdam', 'event': 'European Championships', 'category': '-90kg' }, { 'year': '2008', 'type': 'G', 'city': 'Lisbon', 'event': 'European Championships', 'category': '-90kg' }]
}, {
  'id': 'rishod-sobirov',
  'name': 'Rishod Sobirov',
  'country': 'uz',
  'birth': '1986',
  'image': 'rishod-sobirov.jpg',
  'cover': 'rishod-sobirov-cover.jpg',
  'link': 'https://en.wikipedia.org/wiki/Rishod_Sobirov',
  'medals': [{ 'year': '2007', 'type': 'S', 'city': 'Kuwait City', 'event': 'Asian Championships', 'category': '-60kg' }, { 'year': '2008', 'type': 'B', 'city': 'Beijing', 'event': 'Olympic Games', 'category': '-60kg' }, { 'year': '2010', 'type': 'G', 'city': 'Tokyo', 'event': 'World Championships', 'category': '-60kg' }, { 'year': '2011', 'type': 'G', 'city': 'Paris', 'event': 'World Championships', 'category': '-60kg' }, { 'year': '2012', 'type': 'B', 'city': 'London', 'event': 'Olympic Games', 'category': '-60kg' }, { 'year': '2015', 'type': 'B', 'city': 'Astana', 'event': 'World Championships', 'category': '-66kg' }, { 'year': '2016', 'type': 'B', 'city': 'Rio de Janeiro', 'event': 'Olympic Games', 'category': '-66kg' }]
}, {
  'id': 'ryoko-tani',
  'name': 'Ryoko Tani',
  'country': 'jp',
  'birth': '1975',
  'image': 'ryoko-tani.jpg',
  'cover': 'ryoko-tani-cover.jpg',
  'link': 'https://en.wikipedia.org/wiki/Ryoko_Tani',
  'medals': [{ 'year': '1991', 'type': 'B', 'city': 'Barcelona', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '1991', 'type': 'B', 'city': 'Osaka', 'event': 'Asian Championships', 'category': '-48kg' }, { 'year': '1992', 'type': 'S', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-48kg' }, { 'year': '1993', 'type': 'G', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '1994', 'type': 'G', 'city': 'Hiroshima', 'event': 'Asian Games', 'category': '-48kg' }, { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '1995', 'type': 'G', 'city': 'Fukuoka', 'event': 'Universiade', 'category': '-48kg' }, { 'year': '1996', 'type': 'S', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-48kg' }, { 'year': '1997', 'type': 'G', 'city': 'Paris', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '2000', 'type': 'G', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-48kg' }, { 'year': '2001', 'type': 'G', 'city': 'Munich', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '2003', 'type': 'G', 'city': 'Osaka', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '2004', 'type': 'G', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-48kg' }, { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-48kg' }, { 'year': '2008', 'type': 'B', 'city': 'Beijing', 'event': 'Olympic Games', 'category': '-48kg' }]
}, {
  'id': 'teddy-riner',
  'name': 'Teddy Riner',
  'country': 'fr',
  'birth': '1989',
  'image': 'teddy-riner.jpg',
  'cover': 'teddy-riner-cover.jpg',
  'link': 'https://en.wikipedia.org/wiki/Teddy_Riner',
  'medals': [{ 'year': '2007', 'type': 'G', 'city': 'Belgrade', 'event': 'European Championships', 'category': '+100kg' }, { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2008', 'type': 'B', 'city': 'Beijing', 'event': 'Olympic Games', 'category': '+100kg' }, { 'year': '2008', 'type': 'G', 'city': 'Levallois-Perret', 'event': 'World Openweight Championships', 'category': 'Open' }, { 'year': '2009', 'type': 'G', 'city': 'Pescara', 'event': 'Mediterranean Games', 'category': '+100kg' }, { 'year': '2009', 'type': 'G', 'city': 'Rotterdam', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2010', 'type': 'G', 'city': 'Tokyo', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2010', 'type': 'S', 'city': 'Tokyo', 'event': 'World Championships', 'category': 'Open' }, { 'year': '2011', 'type': 'G', 'city': 'Istanbul', 'event': 'European Championships', 'category': '+100kg' }, { 'year': '2011', 'type': 'G', 'city': 'Paris', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2012', 'type': 'G', 'city': 'London', 'event': 'Olympic Games', 'category': '+100kg' }, { 'year': '2013', 'type': 'G', 'city': 'Budapest', 'event': 'European Championships', 'category': '+100kg' }, { 'year': '2013', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2014', 'type': 'G', 'city': 'Chelyabinsk', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2014', 'type': 'G', 'city': 'Montpellier', 'event': 'European Championships', 'category': '+100kg' }, { 'year': '2015', 'type': 'G', 'city': 'Astana', 'event': 'World Championships', 'category': '+100kg' }, { 'year': '2016', 'type': 'G', 'city': 'Kazan', 'event': 'European Championships', 'category': '+100kg' }, { 'year': '2016', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Olympic Games', 'category': '+100kg' }]
}];

exports.default = athletes;