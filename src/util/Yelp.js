let apiKey = 'swDEz_Nf9gIbgboqjnPiTZOx6ulg5uMZqx3Nda2cVBo2uS4U-ZDz852wfI0CTH-BneOsFj7VO6bjJC0S9hCc5jW6P5K_zd2ch96Q3OHGRkiWRrMWdT1_LwzEL9tXWnYx';
//let clientId = '3HprdOlPBi4iALnOx4o_2A';
let corsUrl = 'https://cors-anywhere.herokuapp.com/';
let endpointUrl = 'https://api.yelp.com/v3/businesses/search?term=';

let Yelp = {
  search: function(term, location, sortBy) {
    let urlToFetch = corsUrl+endpointUrl+term+"&location="+location+"&sort_by="+sortBy;
    //console.log(urlToFetch);
    return fetch(urlToFetch, {
      headers: {Authorization: `Bearer ${apiKey}`},
      Origin: '',
    }
  ).then(response => response.json()).then(jsonResponse => {
    if(jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
    } else {
      return null;
    }
  }).then(busobj => busobj);
  }
};

export default Yelp;
