import React from 'react'
import { useState, createContext } from 'react';

export const MoviesContext = createContext({})

export function MoviesProvider({ children }) {
    const [movies, setMovies] = useState(
        [
            {
                name: "Trending Now",
                movies: [
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg", moviesTitle: "Interstellar", green: "97%  Match", moviesRate: "PG-13", moviesDuration: "2h 49m", movieRating: " 8.6/10",
                        movieStars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", movieGenre: "Adventure, Drama, Sci-Fi", movieOverview: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg", moviesTitle: "It's Always Sunny in Philadelphia", green: "100%  Match", moviesRate: "TV-MA", moviesDuration: "13 Seasons", movieRating: "8.8/10",
                        movieStars: "Glenn Howerton, Rob McElhenney, Charlie Day", movieGenre: "Comedy", movieOverview: "Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald 'Mac' McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg", moviesTitle: "Marvel's Luke Cage", green: "93%  Match", moviesRate: "TV-MA", moviesDuration: "2 Seasons", movieRating: "7.5/10",
                        movieStars: "Mike Colter, Simone Missick, Theo Rossi", movieGenre: "Action, Crime, Drama", movieOverview: "This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. 'Marvel's Luke Cage' is the third show in the Netflix-original Defenders series.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg", moviesTitle: "The Office", green: "100%  Match", moviesRate: "TV-14", moviesDuration: "9 Seasons", movieRating: "8.8/10",
                        movieStars: "Steve Carell, Jenna Fischer, John Krasinski", movieGenre: "Comedy", movieOverview: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg", moviesTitle: "Parks and Recreation", green: "100%  Match", moviesRate: "TV-PG", moviesDuration: "7 Seasons", movieRating: "8.6/10",
                        movieStars: "Amy Poehler, Nick Offerman, Chris Pratt", movieGenre: "Comedy", movieOverview: "Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg", moviesTitle: "Thor: Ragnarok", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 10m", movieRating: "7.9/10",
                        movieStars: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett", movieGenre: "Action, Adventure, Comedy", movieOverview: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg", moviesTitle: "Star Wars: Episode VIII: The Last Jedi", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 31m", movieRating: "7.3/10",
                        movieStars: "Daisy Ridley, John Boyega, Mark Hamill", movieGenre: "Action, Adventure, Fantasy", movieOverview: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg", moviesTitle: "Dexter", green: "99%  Match", moviesRate: "TV-MA", moviesDuration: "8 Seasons", movieRating: "8.7/10",
                        movieStars: "Michael C. Hall, Jennifer Carpenter, David Zayas", movieGenre: "Crime, Drama, Mystery", movieOverview: "Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg"
                    }
                ],
            },
            {
                name: "Popular on Netflix",
                movies: [
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg", moviesTitle: "Dexter", green: "99%  Match", moviesRate: "TV-MA", moviesDuration: "8 Seasons", movieRating: "8.7/10",
                        movieStars: "Michael C. Hall, Jennifer Carpenter, David Zayas", movieGenre: "Crime, Drama, Mystery", movieOverview: "Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg", moviesTitle: "Star Wars: Episode VIII: The Last Jedi", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 31m", movieRating: "7.3/10",
                        movieStars: "Daisy Ridley, John Boyega, Mark Hamill", movieGenre: "Action, Adventure, Fantasy", movieOverview: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg", moviesTitle: "Thor: Ragnarok", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 10m", movieRating: "7.9/10",
                        movieStars: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett", movieGenre: "Action, Adventure, Comedy", movieOverview: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg", moviesTitle: "Parks and Recreation", green: "100%  Match", moviesRate: "TV-PG", moviesDuration: "7 Seasons", movieRating: "8.6/10",
                        movieStars: "Amy Poehler, Nick Offerman, Chris Pratt", movieGenre: "Comedy", movieOverview: "Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg", moviesTitle: "The Office", green: "100%  Match", moviesRate: "TV-14", moviesDuration: "9 Seasons", movieRating: "8.8/10",
                        movieStars: "Steve Carell, Jenna Fischer, John Krasinski", movieGenre: "Comedy", movieOverview: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg", moviesTitle: "Marvel's Luke Cage", green: "93%  Match", moviesRate: "TV-MA", moviesDuration: "2 Seasons", movieRating: "7.5/10",
                        movieStars: "Mike Colter, Simone Missick, Theo Rossi", movieGenre: "Action, Crime, Drama", movieOverview: "This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. 'Marvel's Luke Cage' is the third show in the Netflix-original Defenders series.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg", moviesTitle: "It's Always Sunny in Philadelphia", green: "100%  Match", moviesRate: "TV-MA", moviesDuration: "13 Seasons", movieRating: "8.8/10",
                        movieStars: "Glenn Howerton, Rob McElhenney, Charlie Day", movieGenre: "Comedy", movieOverview: "Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald 'Mac' McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg", moviesTitle: "Interstellar", green: "97%  Match", moviesRate: "PG-13", moviesDuration: "2h 49m", movieRating: " 8.6/10",
                        movieStars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", movieGenre: "Adventure, Drama, Sci-Fi", movieOverview: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg"
                    }
                ],
            },
            {
                name: "New Releases",
                movies: [
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg", moviesTitle: "Interstellar", green: "97%  Match", moviesRate: "PG-13", moviesDuration: "2h 49m", movieRating: " 8.6/10",
                        movieStars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", movieGenre: "Adventure, Drama, Sci-Fi", movieOverview: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg", moviesTitle: "It's Always Sunny in Philadelphia", green: "100%  Match", moviesRate: "TV-MA", moviesDuration: "13 Seasons", movieRating: "8.8/10",
                        movieStars: "Glenn Howerton, Rob McElhenney, Charlie Day", movieGenre: "Comedy", movieOverview: "Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald 'Mac' McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg", moviesTitle: "Marvel's Luke Cage", green: "93%  Match", moviesRate: "TV-MA", moviesDuration: "2 Seasons", movieRating: "7.5/10",
                        movieStars: "Mike Colter, Simone Missick, Theo Rossi", movieGenre: "Action, Crime, Drama", movieOverview: "This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. 'Marvel's Luke Cage' is the third show in the Netflix-original Defenders series.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg", moviesTitle: "The Office", green: "100%  Match", moviesRate: "TV-14", moviesDuration: "9 Seasons", movieRating: "8.8/10",
                        movieStars: "Steve Carell, Jenna Fischer, John Krasinski", movieGenre: "Comedy", movieOverview: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg", moviesTitle: "Parks and Recreation", green: "100%  Match", moviesRate: "TV-PG", moviesDuration: "7 Seasons", movieRating: "8.6/10",
                        movieStars: "Amy Poehler, Nick Offerman, Chris Pratt", movieGenre: "Comedy", movieOverview: "Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg", moviesTitle: "Thor: Ragnarok", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 10m", movieRating: "7.9/10",
                        movieStars: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett", movieGenre: "Action, Adventure, Comedy", movieOverview: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg", moviesTitle: "Star Wars: Episode VIII: The Last Jedi", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 31m", movieRating: "7.3/10",
                        movieStars: "Daisy Ridley, John Boyega, Mark Hamill", movieGenre: "Action, Adventure, Fantasy", movieOverview: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg", moviesTitle: "Dexter", green: "99%  Match", moviesRate: "TV-MA", moviesDuration: "8 Seasons", movieRating: "8.7/10",
                        movieStars: "Michael C. Hall, Jennifer Carpenter, David Zayas", movieGenre: "Crime, Drama, Mystery", movieOverview: "Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg"
                    }
                ],
            },
            {
                name: "Watch It Again",
                movies: [
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg", moviesTitle: "Dexter", green: "99%  Match", moviesRate: "TV-MA", moviesDuration: "8 Seasons", movieRating: "8.7/10",
                        movieStars: "Michael C. Hall, Jennifer Carpenter, David Zayas", movieGenre: "Crime, Drama, Mystery", movieOverview: "Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg", moviesTitle: "Star Wars: Episode VIII: The Last Jedi", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 31m", movieRating: "7.3/10",
                        movieStars: "Daisy Ridley, John Boyega, Mark Hamill", movieGenre: "Action, Adventure, Fantasy", movieOverview: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg", moviesTitle: "Thor: Ragnarok", green: "98%  Match", moviesRate: "PG-13", moviesDuration: "2h 10m", movieRating: "7.9/10",
                        movieStars: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett", movieGenre: "Action, Adventure, Comedy", movieOverview: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg", moviesTitle: "Parks and Recreation", green: "100%  Match", moviesRate: "TV-PG", moviesDuration: "7 Seasons", movieRating: "8.6/10",
                        movieStars: "Amy Poehler, Nick Offerman, Chris Pratt", movieGenre: "Comedy", movieOverview: "Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg", moviesTitle: "The Office", green: "100%  Match", moviesRate: "TV-14", moviesDuration: "9 Seasons", movieRating: "8.8/10",
                        movieStars: "Steve Carell, Jenna Fischer, John Krasinski", movieGenre: "Comedy", movieOverview: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg", moviesTitle: "Marvel's Luke Cage", green: "93%  Match", moviesRate: "TV-MA", moviesDuration: "2 Seasons", movieRating: "7.5/10",
                        movieStars: "Mike Colter, Simone Missick, Theo Rossi", movieGenre: "Action, Crime, Drama", movieOverview: "This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. 'Marvel's Luke Cage' is the third show in the Netflix-original Defenders series.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg", moviesTitle: "It's Always Sunny in Philadelphia", green: "100%  Match", moviesRate: "TV-MA", moviesDuration: "13 Seasons", movieRating: "8.8/10",
                        movieStars: "Glenn Howerton, Rob McElhenney, Charlie Day", movieGenre: "Comedy", movieOverview: "Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald 'Mac' McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg"
                    },
                    {
                        srcImg: "https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg", moviesTitle: "Interstellar", green: "97%  Match", moviesRate: "PG-13", moviesDuration: "2h 49m", movieRating: " 8.6/10",
                        movieStars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", movieGenre: "Adventure, Drama, Sci-Fi", movieOverview: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
                        moviePoster: "https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg"
                    }
                ],
            },
        ])

    return (
        <MoviesContext.Provider value={movies}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider;