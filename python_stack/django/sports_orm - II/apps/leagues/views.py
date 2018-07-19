from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count

from . import team_maker

def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
		"at_socc_teams": League.objects.get(name="Atlantic Soccer Conference").teams.all(),
		"penguin_players": Player.objects.filter(curr_team__team_name="Penguins"),
		"baseball_conference_players": Player.objects.filter(curr_team__league__name="International Collegiate Baseball Conference"),
		"lopez_football_conference_players": Player.objects.filter(last_name="Lopez",curr_team__league__name="American Conference of Amateur Football"),
		"football_players": Player.objects.filter(curr_team__league__sport="Football"),
		"team_sophia": Team.objects.filter(curr_players__first_name="Sophia"),
		"league_sophia": League.objects.filter(teams__curr_players__first_name="Sophia"),
		"players_flores_not_rider": Player.objects.filter(last_name="Flores").exclude(curr_team__team_name="Washington Roughriders"),
		"all_teams_samuel_evans": Team.objects.filter(all_players__first_name="Samuel", all_players__last_name="Evans"),
		"all_players_cats": Player.objects.filter(all_teams__team_name="Tiger-Cats"),
		"former_vikings": Player.objects.filter(all_teams__team_name="Vikings").exclude(curr_team__team_name="Vikings"),
		"teams_jacob_before_colts": Team.objects.filter(all_players__first_name="Jacob", all_players__last_name="Gray").exclude(team_name="Colts"),
		"players_joshua_in_fed": Player.objects.filter(first_name="Joshua", all_teams__league__name="Atlantic Federation of Amateur Baseball Players"),
		"teams_greater_than_12": Team.objects.annotate(player_count = Count('all_players')).filter(player_count__gte=12),
		"players_sort_by_teams_played": Player.objects.annotate(team_count = Count('all_teams')).order_by('-team_count')
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")