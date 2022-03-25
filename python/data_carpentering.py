from operator import index
import pandas as pd

df = pd.read_csv("./data/processed.csv")

player_skills = df[['Crossing', 'Finishing', 'Heading Accuracy', 'Short Passing', 'Volleys',
       'Dribbling', 'Curve', 'FK Accuracy', 'Long Passing', 'Ball Control',
       'Acceleration', 'Sprint Speed', 'Agility', 'Reactions', 'Balance',
       'Shot Power', 'Jumping', 'Stamina', 'Strength', 'Long Shots',
       'Aggression', 'Interceptions', 'Positioning', 'Vision', 'Penalties',
       'Composure', 'Defensive Awareness', 'Standing Tackle', 'Sliding Tackle',
       'GK Diving', 'GK Handling', 'GK Kicking', 'GK Positioning',
       'GK Reflexes']]

player_skills.reset_index(inplace=True)
final_player_skills = player_skills.rename(columns={"index":"Player_Id"})

final_player_skills.to_csv("./data/player_skills_attributes.csv")

player_details = df[['Name', 'Overall Rating', 'Potential', 'Value', 'Wage','Positions', 'Nationality', 'Age', 'Height', 'Weight',
       'Primary Position', 'Club', 'National Team']]

player_details.reset_index(inplace=True)
final_player_details = player_details.rename(columns={"index":"Player_Id"})

final_player_details.to_csv("./data/player_details.csv")
