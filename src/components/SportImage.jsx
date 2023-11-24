import React from "react";

const sportsData = [
  {
    type: "ARCHERY",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Archery_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "ARTISTIC GYMNASTICS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Gymnastics_%28artistic%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "ARTISTIC SWIMMING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Artistic_swimming_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "ATHLETICS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Athletics_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BADMINTON",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Badminton_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BASKETBALL",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/Basketball_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "3X3 BASKETBALL",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/4/49/Basketball_%283x3%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BEACH VOLLEYBALL",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Volleyball_%28beach%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BMX FREESTYLE",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/8/83/Cycling_%28BMX_freestyle%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BMX RACING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/a/af/Cycling_%28BMX_race%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BOXING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Boxing_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "BREAKING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Breaking_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "CANOE SLALOM",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Canoe_slalom_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "CANOE SPRINT",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Canoe_sprint_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "CYCLING MOUNTAIN BIKE",
    imgLink:
      "https://en.wikipedia.org/wiki/Cycling_at_the_2024_Summer_Olympics#/media/File:Cycling_(mountain)_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "CYCLING ROAD",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Cycling_%28road%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "CYCLING TRACK",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Cycling_%28track%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "DIVING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/0/0e/Diving_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "EQUESTRIAN DRESSAGE",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Equestrian_%28dressage%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "EQUESTRIAN EVENTING",
    imgLink:
      "https://en.wikipedia.org/wiki/Equestrian_at_the_2024_Summer_Olympics#/media/File:Equestrian_(eventing)_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "EQUESTRIAN JUMPING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/c/c8/Equestrian_%28jumping%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "FENCING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Fencing_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "FOOTBALL",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/Football_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "GOLF",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/d/d3/Golf_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "HANDBALL",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Handball_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "HOCKEY",
    imgLink:
      "https://en.wikipedia.org/wiki/Field_hockey_at_the_2024_Summer_Olympics#/media/File:Field_hockey_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "JUDO",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/3/35/Judo_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "MARATHON SWIMMING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Swimming_%28marathon%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "MODERN PENTATHLON",
    imgLink:
      "https://en.wikipedia.org/wiki/Modern_pentathlon_at_the_2024_Summer_Olympics#/media/File:Modern_pentathlon_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "RHYTHMICS GYMNASTICS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Gymnastics_%28rhythmic%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "ROWING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Rowing_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "RUGBY SEVEN",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Rugby_sevens_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "SAILING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Sailing_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "SHOOTING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Shooting_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "SKATEBOARD",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/Skateboarding_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "SPORT CLIMBING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/Sport_climbing_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "SURFING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/e/e3/Surfing_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "SWIMMING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Swimming_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "TABLE TENNIS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/1/12/Table_tennis_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "TAEKWONDO",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Taekwondo_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "TENNIS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Tennis_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "TRAMPOLINE GYMNASTICS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Gymnastics_%28trampoline%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "TRIATHLON",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/0/09/Triathlon_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "VOLLEYBALL",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/7/7a/Volleyball_%28indoor%29_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "WATER POLO",
    imgLink:
      "https://en.wikipedia.org/wiki/Water_polo_at_the_2024_Summer_Olympics#/media/File:Water_polo_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "WEIGHTLIFTING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Weightlifting_%E2%80%93_Paris_2024.svg",
  },
  {
    type: "WRESTLING",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Wrestling_%E2%80%93_Paris_2024.svg",
  },
];

const SportImage = ({ type }) => {
  const sport = sportsData.find((sport) => sport.type === type);

  if (!sport) {
    return "";
  }
  return <img className="sport-img" src={sport.imgLink} alt={sport.type} />;
};

export default SportImage;
