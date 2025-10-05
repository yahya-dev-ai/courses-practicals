# EnerVision

<p align="center">
  <img src="./image/Team Logo.png" width="800" alt="EnerVision Team Logo">
</p>

## 📋 Project Overview

**EnerVision** is a comprehensive machine learning project developed as a capstone project for the **Samsung Innovation Campus AI** program in partnership with **MISK**. This project focuses on predicting energy consumption patterns using advanced machine learning and time series analysis techniques.

## 🎯 Objectives

- Develop accurate models to predict energy consumption based on various environmental and operational factors
- Analyze the impact of different variables (temperature, humidity, occupancy, HVAC usage) on energy consumption
- Compare multiple machine learning approaches to identify the most effective prediction model
- Provide insights for energy optimization and management

## 📊 Dataset

The project utilizes the `Energy_consumption.csv` dataset containing:
- **1000 rows × 11 columns**
- **Time-based features**: Timestamp, Hour, Month, Day of Week
- **Environmental factors**: Temperature, Humidity, Solar Radiation, Wind Speed
- **Operational variables**: Occupancy, HVAC Usage, Lighting Usage
- **Target variable**: Energy Consumption

## 🔬 Methodology

### 1. Data Preprocessing & Engineering
- **Data Cleaning**: Handled missing values and duplicates
- **Feature Engineering**: 
  - Extracted temporal features (Hour, Month, Weekend indicators)
  - Created energy per occupant ratios
  - Generated lagged features and rolling averages
- **Encoding**: Applied Label Encoding to categorical variables
- **Scaling**: Standardized numerical features using StandardScaler

### 2. Exploratory Data Analysis
- Correlation analysis revealing **Temperature** as the strongest predictor
- Temporal pattern analysis (daily, weekly consumption patterns)
- Outlier detection and distribution analysis
- Comprehensive visualization of consumption patterns

### 3. Machine Learning Models

#### Baseline Model
- **Linear Regression**: Established performance baseline

#### Advanced Models
- **Random Forest**: Ensemble method for complex pattern recognition
- **Gradient Boosting**: Sequential learning for improved accuracy
- **Support Vector Regression (SVR)**: Non-linear relationship modeling
- **ARIMA/SARIMA**: Time series specific approaches
- **SARIMAX**: Advanced time series with external variables

### 4. Model Optimization
- **Hyperparameter Tuning**: Systematic optimization using grid search
- **Cross-validation**: Robust model evaluation
- **Feature Selection**: Identifying most impactful variables

## 📈 Results

### Best Performing Model: **Tuned SVR**
- **R² Score**: 52.51%
- **RMSE**: Lowest among all tested models
- **MAE**: Superior prediction accuracy

### Key Findings
1. **Temperature** is the primary driver of energy consumption
2. **Temporal features** (time of day, day of week) significantly improve prediction accuracy
3. **Advanced models with hyperparameter tuning** outperform baseline approaches
4. **Historical usage patterns** provide valuable predictive information

## 🛠️ Technologies Used

- **Python**: Core programming language
- **Pandas & NumPy**: Data manipulation and analysis
- **Scikit-learn**: Machine learning algorithms and preprocessing
- **Matplotlib & Seaborn**: Data visualization
- **Statsmodels**: Time series analysis (ARIMA, SARIMA)
- **Jupyter Notebook**: Development environment

## 📁 Project Structure

```
SIC AI/
├── EnerVision.ipynb                    # Main project notebook
├── Dataset/
│   └── Energy_consumption.csv          # Energy consumption dataset
├── image/
│   └── Team Logo.png                   # Project logo
└── README.MD                          # Project documentation
```

## 🚀 Usage

1. **Clone the repository**
2. **Install required dependencies**: `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `seaborn`, `statsmodels`
3. **Open**: `EnerVision.ipynb` in Jupyter Notebook
4. **Run all cells** to reproduce the analysis and results

## 💡 Future Enhancements

- Integration of real-time weather forecast data
- Implementation of deep learning approaches (LSTM, GRU)
- Development of a web-based prediction dashboard
- Extension to multi-building energy management systems

## 🎓 Academic Context

This project represents the culmination of learning in the **Samsung Innovation Campus AI** program, demonstrating practical application of:
- Machine Learning fundamentals
- Time Series Analysis
- Feature Engineering techniques
- Model evaluation and optimization
- Data visualization and interpretation

## 👥 Team & Acknowledgments

### Team Roles & Contributions

- **Project Management & Team Lead**: Yahya Aldawsari
- **Data Preprocessing**: Sarah Alhamdan & Bashaer Alhammad  
- **Modeling & Training**: Yahya Aldawsari & Rana Albouqmi
- **Evaluation**: Amjad Alnasser & Ruba Bin Mulayh

Developed as part of the **Samsung Innovation Campus** AI certification program in partnership with **MISK Foundation**, showcasing practical AI/ML skills in energy management and sustainability.

---

> 📊 **Project Impact**: Contributing to energy efficiency through AI-driven consumption prediction and optimization strategies.
