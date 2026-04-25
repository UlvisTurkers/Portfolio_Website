// Featured project data — extend or reorder as the portfolio grows.
export const projects = [
  {
    title: 'Medikate',
    badge: 'IBM Z Datathon · 1st Place',
    description:
      'Predicted medication non-adherence using XGBoost and Gaussian Mixture Models, reaching 85% accuracy on patient behaviour data.',
    stack: ['XGBoost', 'GMM', 'Python', 'IBM Z'],
    href: 'https://github.com/Neesay/IBM-Z-Datathon-2025-Team-15-EdizSlow',
    accent: true,
  },
  {
    title: 'Seekr',
    description:
      'Intelligent learning platform powered by a custom RAG pipeline (FastAPI + Whisper + Qdrant) that hits 87% answer relevance on academic content.',
    stack: ['FastAPI', 'Whisper', 'Qdrant', 'RAG'],
  },
  {
    title: 'Plant Disease Classification',
    description:
      'PyTorch CNN trained across 39 plant disease classes, achieving 98.5% test accuracy with augmentation and transfer learning.',
    stack: ['PyTorch', 'CNN', 'Computer Vision'],
  },
  {
    title: 'RL-Based Stock Trader',
    description:
      'PPO reinforcement-learning agent trained on the S&P 500, achieving 34% annualised profit in back-testing across multi-year windows.',
    stack: ['PPO', 'Reinforcement Learning', 'PyTorch', 'Finance'],
  },
  {
    title: 'Autonomous Navigator',
    description:
      'ROS-based navigation stack for indoor robotics — mapping, path planning, and real-time obstacle avoidance.',
    stack: ['ROS', 'C++', 'Robotics'],
  },
  {
    title: 'Smart Kitchen Helper',
    description:
      'FastAPI service that suggests recipes from pantry contents, with vision-based ingredient detection and dietary filters.',
    stack: ['FastAPI', 'Computer Vision', 'Python'],
  },
]
