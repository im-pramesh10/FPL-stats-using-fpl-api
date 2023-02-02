# FPL Stats using FPL API call
A reactjs frontend to pull fpl stats from public fpl api calls

## The Website is live below:
### Cloudfare
https://fplstats.pages.dev/


## FPL Rest API endpoints

- https://fantasy.premierleague.com/api/bootstrap-static/ : events (gameweeks), teams, players, game settings, phases,
  and elements (players)
- https://fantasy.premierleague.com/api/fixtures/ : fixtures
- [https://fantasy.premierleague.com/api/element-summary/{player_id}/](https://fantasy.premierleague.com/api/element-summary/215/) :
  stats of a given player.
- [https://fantasy.premierleague.com/api/event/{event_id}/live/](https://fantasy.premierleague.com/api/event/3/live/) : live
  stats, by player, for a given gameweek, and how much points he scored in fantasy.
- [https://fantasy.premierleague.com/api/entry/{entry_id}/history/](https://fantasy.premierleague.com/api/entry/663372/history/) :
  data for a given entry (a fantasy team) for the past gameweeks of the season, plus past seasons.
- [https://fantasy.premierleague.com/api/entry/{entry_id}/event/{event_id}/picks/](https://fantasy.premierleague.com/api/entry/6043795/event/3/picks/) :
  data of picks of a given fpl team for a given entry (gameweek)
