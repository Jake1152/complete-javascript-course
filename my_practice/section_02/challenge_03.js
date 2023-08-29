/* Write your code below. Good luck! 🙂 */


/**
 * keyword를 자꾸 뺴먹는데 신경쓸것
 * keywork없으면 전역으로 처리됨
 */
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas  = (88 + 91 + 110) / 3;

if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Dolphins win the trophy");
}