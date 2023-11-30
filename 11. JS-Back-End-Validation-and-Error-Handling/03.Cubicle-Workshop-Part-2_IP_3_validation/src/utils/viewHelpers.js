exports.getDifficultyLevelViewData = function (difficultyLevel){
    const title = [
       'Very Easy',
       'Easy',
       'Medium (Standard 3x3)',
       'Intermediate',
       'Expert',
       'Hardcore',
    ];
    const options = title.map((title, index) => ({
       title: `${index + 1 } - ${title}`,
       value: index+1,
       selected : Number(difficultyLevel) === index + 1
    }));
    return options;
 };