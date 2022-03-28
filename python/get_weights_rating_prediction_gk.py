import pandas as pd
import pickle as pkl
import numpy as np
from sklearn.linear_model import LinearRegression as LR
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

data = pd.read_csv('./data/processed.csv')

gk_attributes = ['Reactions', 'GK Diving', 'GK Handling', 'GK Kicking', 'GK Positioning', 'GK Reflexes']
goal_keeper_data = data[data["Primary Position"] == "GK"]
gk_player_ratings = goal_keeper_data[["Overall Rating"]]
gk_data = goal_keeper_data[gk_attributes]

x_train, x_test, y_train, y_test = train_test_split(gk_data, gk_player_ratings, test_size = 0.2, random_state = 42)
gk_model = LR(n_jobs=-1).fit(x_train, y_train)
y_predict = gk_model.predict(x_test)

print(r2_score(y_test, y_predict))
print(gk_model.coef_)

