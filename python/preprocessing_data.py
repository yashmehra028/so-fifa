import pandas as pd
import numpy as np
import re
from fuzzywuzzy import fuzz


def get_positions(position_str: str) -> list:
    """
    Splits a string containing a list of positions for a player
    """
    pos = re.sub("[\[\]\' ]", "", position_str).split(",")
    pos = position_str.lstrip('[').rstrip(']').replace(
        " ", "").replace("'", "").split(',')
    return pos


def get_teams(row) -> list:
    teams = re.sub("[\[\]\']", "", row["Teams"]).split(",")
    teams = [x.strip(" ") for x in teams]
    if len(teams) == 1:
        if fuzz.partial_ratio(row["Nationality"], teams[0]) > 80:
            return ["", teams[0]]
        else:
            return [teams[0], ""]
    if fuzz.partial_ratio(row["Nationality"], teams[0]) > fuzz.partial_ratio(row["Nationality"], teams[1]):
        return [teams[1], teams[0]]
    else:
        return [teams[0], teams[1]]


fifa_data = pd.read_csv('./data/final_again_1.csv')
fifa_data.reset_index(drop=True, inplace=True)

fifa_data['Positions'] = fifa_data["Positions"].apply(get_positions)
fifa_data['Primary Position'] = fifa_data["Positions"].apply(lambda x: x[0])

fifa_data["Teams"] = fifa_data.apply(get_teams, axis=1)
fifa_data['Teams'] = fifa_data['Teams'].apply(lambda x: x)
fifa_data['Club'] = fifa_data['Teams'].apply(lambda x: x[0])
fifa_data['National Team'] = fifa_data['Teams'].apply(lambda x: x[1])

fifa_data.reset_index(inplace=True)
fifa_data.drop(columns=['Teams', 'Unnamed: 0', 'index'], inplace=True)

fifa_data.to_csv("./data/processed.csv", index=False)
