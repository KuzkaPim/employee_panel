import './app-info.scss';

const AppInfo = ({data}) => {
    const totalItem = data.length,
          totalIncreaseItem = data.filter(item => item.isIncrease).length;

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalItem}</h2>
            <h2>Премию получат: {totalIncreaseItem}</h2>
        </div>
    );
};

export default AppInfo;