
import { GameStatisticSchema } from '../schemas/game.statistic.schema';
import mongoose from "mongoose";

const UserGameStatusModel = mongoose.model('UserGameStatus', GameStatisticSchema);


export function getTopScores() {
  return UserGameStatusModel.find({}, null, { sort: { score: -1 }, limit: 10 }).exec()
}







