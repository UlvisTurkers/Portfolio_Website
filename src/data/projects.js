// Featured project data. Each entry can include a `detail` block
// rendered in the Deep Dive modal.
//
// Link rules:
//   - `href`: the canonical GitHub repository URL (renders the orange
//     "GitHub Repository" link in card + detail).
//   - `repoStatus`: when no public repo exists, set to one of:
//       'private'    -> repo signal is hidden in the UI entirely
//       'restricted' -> "Access Restricted" orange pill (no link)
export const projects = [
  {
    title: 'Medikate',
    badge: 'IBM Z Datathon · 1st Place',
    description:
      'Tabular Transformer that predicts medication non-adherence risk on IBM Z, with ordinal heads and clinician dashboard.',
    stack: ['PyTorch Lightning', 'Transformer', 'IBM Z', 'FastAPI'],
    href: 'https://github.com/Neesay/IBM-Z-Datathon-2025-Team-15-EdizSlow',
    accent: true,
    detail: {
      tagline: 'IBM Z Datathon 2025, Team 15',
      overview:
        'Medikate predicts the likelihood of a patient missing prescribed medications using tabular healthcare data. It combines robust preprocessing, class-imbalance handling, and an interpretable Transformer-based classifier deployed securely on IBM Z / LinuxONE.',
      architecture: [
        {
          title: 'Data Preparation',
          body: 'Robust CSV loader normalises headers, cleans missing values, and harmonises target labels (unlikely, semi likely, likely).',
        },
        {
          title: 'Encoding and Bucketing',
          body: 'Rare categorical variables are embedded; numeric variables are standardised before projection into a shared latent space.',
        },
        {
          title: 'Tabular Transformer',
          body: 'Categorical and numerical embeddings are projected to a shared latent space and passed through a multi-head Transformer encoder, then mean-pooled.',
        },
        {
          title: 'Ordinal Prediction Head',
          body: 'Two logits, P(y >= 1) and P(y >= 2), model ordered risk categories using an Ordinal Focal Loss.',
        },
        {
          title: 'Clinician Dashboard',
          body: 'React + Next.js + FastAPI + PostgreSQL UI with patient list, three-level risk classification, drill-down detail, and adherence trend plots.',
        },
      ],
      metrics: [
        { value: '85%', label: 'Overall accuracy' },
        { value: '0.91', label: 'F1 (Unlikely class)' },
        { value: '0.79', label: 'Macro F1 average' },
        { value: '0.86', label: 'Weighted F1 average' },
      ],
      features: [
        'Ordinal 3-tier risk prediction (Unlikely, Semi Likely, Likely)',
        'Class-imbalance handling via weighted sampling and focal loss',
        'IBM Z Confidential Computing for end-to-end data protection',
        'Attention heatmaps for interpretable, per-feature rationale',
        'Robust CSV preprocessing for messy real-world healthcare data',
      ],
      tech: [
        'PyTorch',
        'PyTorch Lightning',
        'AdamW + Cosine Annealing',
        'React',
        'Next.js',
        'FastAPI',
        'PostgreSQL',
        'TailwindCSS',
        'IBM Z / LinuxONE',
      ],
    },
  },
  {
    title: 'Seekr',
    description:
      'Lecture intelligence platform turning long-form recordings into searchable transcripts, slides, notes, and grounded Q&A.',
    stack: ['FastAPI', 'Whisper', 'Qdrant', 'Celery', 'Expo Router'],
    // Repository hosted privately; surfaced as restricted in the UI.
    repoStatus: 'restricted',
    accent: true,
    detail: {
      tagline: 'Searchable, structured study material',
      overview:
        'Seekr turns long-form lecture recordings into searchable, structured reference material. It brings transcript search, slide extraction, grounded Q&A, and generated notes into one workflow that is easier to navigate than a raw recording.',
      architecture: [
        {
          title: 'Frontend',
          body: 'Expo Router and React Native Web app for upload, playback, search, notes, and slides. State via Zustand and React Query, auth via Firebase.',
        },
        {
          title: 'API Layer',
          body: 'FastAPI service that stores metadata, creates processing jobs, and serves processed lecture data back to the frontend.',
        },
        {
          title: 'Workers',
          body: 'Celery workers handle long-running transcription, slide extraction with OCR, and retrieval indexing in the background.',
        },
        {
          title: 'Storage and Search',
          body: 'PostgreSQL for relational data, MinIO for media, Qdrant for vector search, RabbitMQ for job queueing, Redis for cache and broker.',
        },
        {
          title: 'ML Pipeline',
          body: 'Faster-Whisper for transcription, EasyOCR for slide text, BGE-M3 / sentence-transformers for embeddings, ffmpeg for media handling.',
        },
      ],
      metrics: [
        { value: '87%', label: 'Answer relevance on lecture content' },
        { value: '< 2s', label: 'Median search latency' },
        { value: '6+', label: 'Coordinated services in stack' },
        { value: '100%', label: 'Citations grounded in transcript' },
      ],
      features: [
        'Lecture upload with background processing',
        'Timestamped transcription and topic-based segmentation',
        'Slide extraction with OCR alongside playback',
        'Semantic search across full lecture content',
        'Grounded Q&A with inline citations',
        'Generated notes with PDF export',
      ],
      tech: [
        'Expo Router',
        'React Native Web',
        'TypeScript',
        'FastAPI',
        'SQLAlchemy',
        'Alembic',
        'Celery',
        'Redis',
        'RabbitMQ',
        'PostgreSQL',
        'MinIO',
        'Qdrant',
        'Faster-Whisper',
        'EasyOCR',
        'BGE-M3',
        'PyTorch',
      ],
    },
  },
  {
    title: 'Plant Disease Identifier',
    description:
      'PyTorch CNN trained across 39 plant disease classes, deployed on Hugging Face Spaces and tracked via ClearML.',
    stack: ['PyTorch', 'CNN', 'Gradio', 'ClearML'],
    // Repository hosted privately; surfaced as restricted in the UI.
    repoStatus: 'restricted',
    detail: {
      tagline: 'CNN classifier on the PlantVillage dataset',
      overview:
        'A convolutional classifier trained on the PlantVillage dataset to identify 39 plant disease classes, packaged with a Gradio web app and a reproducible ClearML training pipeline.',
      architecture: [
        {
          title: 'Data Pipeline',
          body: 'PlantVillage dataset loaded from Hugging Face. 70 / 15 / 15 train / val / test split. Augmentations: 30 degree rotation, horizontal flips, colour jitter, random erasing. Resized to 224 x 224 and normalised with ImageNet statistics.',
        },
        {
          title: 'Model Architecture',
          body: '4 convolutional blocks (32 to 64 to 128 to 256 channels). Each block: Conv2d, BatchNorm, ReLU, MaxPool. Adaptive average pooling, then 256 to 256 to 39 fully connected head with dropout 0.3.',
        },
        {
          title: 'Training',
          body: 'AdamW optimiser, CrossEntropyLoss, CosineAnnealingLR scheduler. Early stopping with patience 3 over 20 epochs. Best checkpoint saved on validation accuracy.',
        },
        {
          title: 'Experiment Tracking',
          body: 'All runs logged to a self-hosted ClearML server under project "Plant Disease CNN". Best model artifact stored as `best_model_checkpoint`.',
        },
        {
          title: 'Deployment',
          body: 'Gradio app deployed to Hugging Face Spaces for live image upload and prediction.',
        },
      ],
      metrics: [
        { value: '98.5%', label: 'Test accuracy' },
        { value: '39', label: 'Plant disease classes' },
        { value: '224 x 224', label: 'Input resolution' },
        { value: '20', label: 'Training epochs (early stop ready)' },
      ],
      features: [
        'Strong diagonal-dominant confusion matrix across 39 classes',
        'Augmentation pipeline tuned for leaf imagery',
        'Reproducible training and testing scripts',
        'Per-class precision, recall, and F1 reporting',
        'ClearML artifacts and metrics for every run',
      ],
      tech: [
        'PyTorch',
        'Torchvision',
        'Gradio',
        'Hugging Face Datasets',
        'ClearML',
        'NumPy',
        'Matplotlib',
        'scikit-learn',
      ],
    },
  },
  {
    title: 'Smart Kitchen Helper',
    description:
      'Containerised cloud system that detects ingredients from images and generates recipes via YOLO and a BitNet LLM.',
    stack: ['FastAPI', 'YOLO', 'BitNet', 'RabbitMQ', 'Docker'],
    href: 'https://github.com/5CCSACCA/coursework-UlvisTurkers',
    detail: {
      tagline: 'Distributed AI cooking assistant',
      overview:
        'Smart Kitchen Helper is a cloud-based AI system that detects ingredients from images and generates recipe suggestions, designed as a distributed, containerised application using asynchronous processing and authenticated APIs.',
      architecture: [
        {
          title: 'API Service',
          body: 'FastAPI app that authenticates users via Firebase, accepts images and ingredient suggestions, publishes jobs to RabbitMQ, and serves history and result endpoints.',
        },
        {
          title: 'Message Queue',
          body: 'RabbitMQ decouples the API from inference workers, buffers jobs, and smooths traffic spikes.',
        },
        {
          title: 'Worker Service',
          body: 'Consumes jobs from RabbitMQ, runs YOLO object detection (Ultralytics, pretrained), and calls a BitNet LLM to infer ingredients and produce three structured recipe suggestions.',
        },
        {
          title: 'Authentication',
          body: 'Firebase Authentication with Bearer ID tokens enforced on all user-facing endpoints via FastAPI dependencies.',
        },
        {
          title: 'Storage',
          body: 'SQLite for local worker persistence and Firestore for per-user detection artefacts. Images themselves are not stored, only metadata.',
        },
      ],
      metrics: [
        { value: '5', label: 'Coordinated services in Compose' },
        { value: '~308M', label: 'Addressable meal-tracking users (ref)' },
        { value: '~27.8M', label: 'Images / month at 0.1% adoption' },
        { value: '6+', label: 'Accepted image input formats' },
      ],
      features: [
        'POST /detect for queued image inference',
        'POST /suggest for ingredient-to-recipe inference',
        'GET /history per authenticated user',
        'Accepts URLs, paths, bytes, base64, NumPy arrays, and PIL images',
        'Reproducible end-to-end via `docker compose up --build`',
      ],
      tech: [
        'FastAPI',
        'Ultralytics YOLO',
        'BitNet LLM',
        'RabbitMQ',
        'Docker',
        'Docker Compose',
        'Firebase Auth',
        'Firestore',
        'SQLite',
        'Python 3.11',
      ],
    },
  },
  {
    title: 'Diamond Regression Challenge',
    description:
      'Meta-optimised XGBoost pipeline that synchronises outlier detection with hyperparameter search to predict diamond prices.',
    stack: ['XGBoost', 'IsolationForest', 'scikit-learn', 'Pandas'],
    href: 'https://github.com/UlvisTurkers/machine-learning-coursework',
    detail: {
      tagline: 'Meta-optimised XGBoost for diamond price prediction',
      overview:
        'A high-performance regression model to predict the `outcome` variable in a tabular diamond dataset. The final solution is a Meta-Optimised XGBoost Pipeline that synchronises outlier detection with model hyperparameter tuning to achieve a robust generalisation score.',
      architecture: [
        {
          title: 'Feature Engineering',
          body: 'Polynomial terms (Carat^2, Carat^3), GIA ideal-cut proximity measures, and volumetric ratios capture non-linear market pricing.',
        },
        {
          title: 'Meta-Optimisation Loop',
          body: 'Custom search loop simultaneously tunes IsolationForest contamination levels alongside XGBoost hyperparameters.',
        },
        {
          title: 'Robust Regression',
          body: 'Pseudo-Huber Loss minimises the influence of extreme luxury-tier price variance while keeping precision on mid-market observations.',
        },
        {
          title: 'Fail-Safe Preprocessing',
          body: 'ColumnTransformer pipeline using OrdinalEncoder with unknown-value handling keeps the model stable during test-set inference.',
        },
      ],
      metrics: [
        { value: '0.4992', label: 'Final validation R^2' },
        { value: '0.4992', label: 'Best search R^2' },
        { value: '2%', label: 'Outlier contamination level' },
        { value: '98%', label: 'Data inliers retained' },
      ],
      features: [
        'Domain-specific diamond market features',
        '45-iteration randomised hyperparameter search',
        'Optimal config: max_depth 6, lr 0.02, subsample 0.7',
        'L1 / L2 regularisation: alpha 0.5, lambda 1.0',
        'Reproducible via version-locked requirements',
      ],
      tech: [
        'XGBoost',
        'scikit-learn',
        'IsolationForest',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
      ],
    },
  },
  {
    title: 'TypiClust (TPC_RP) on CIFAR-10',
    description:
      'Implementation of TypiClust active learning with SimCLR features and random projection, evaluated on CIFAR-10.',
    stack: ['PyTorch', 'SimCLR', 'k-means', 'CIFAR-10'],
    href: 'https://github.com/UlvisTurkers/machine-learning-coursework-2',
    detail: {
      tagline: 'Hacohen et al., ICML 2022',
      overview:
        'Implementation of the TPC_RP (Typicality-based Clustering with Random Projection) active learning algorithm. TypiClust selects the most typical (representative) unlabelled examples for annotation, operating in two phases: self-supervised feature extraction with SimCLR, then typicality-based selection.',
      architecture: [
        {
          title: 'SimCLR Pre-Training',
          body: 'A SimCLR model is trained on the unlabelled pool to produce rich representations without using any labels.',
        },
        {
          title: 'Feature Extraction',
          body: 'Features f(x) extracted via a ResNet-18 backbone for all examples in the unlabelled pool.',
        },
        {
          title: 'Random Projection',
          body: 'z = f(x) W where W is a random projection matrix. Reduces representation dimensionality and improves selection stability at low budgets.',
        },
        {
          title: 'Typicality Selection',
          body: 'k-means clusters z into k = budget clusters. For each cluster, the example with highest density (1 / mean distance to k nearest neighbours) is selected for labelling.',
        },
        {
          title: 'Supervised Loop',
          body: 'Labels queried for selected points, classifier trained on the growing labelled set, and accuracy evaluated each round on the CIFAR-10 test set.',
        },
      ],
      metrics: [
        { value: 'CIFAR-10', label: 'Benchmark dataset' },
        { value: 'ResNet-18', label: 'Backbone architecture' },
        { value: 'k = b', label: 'Clusters per round (budget-matched)' },
        { value: '2', label: 'Notebook variants (original + modified)' },
      ],
      features: [
        'Self-supervised SimCLR pre-training, no labels required',
        'Random projection to stabilise low-budget selection',
        'Per-cluster KNN-density typicality scoring',
        'Reusable features across active-learning rounds',
        'Original baseline plus modified ablation variant',
      ],
      tech: [
        'PyTorch',
        'Torchvision',
        'scikit-learn',
        'SciPy',
        'NumPy',
        'tqdm',
      ],
    },
  },
  {
    title: 'RL-Based Stock Trader',
    description:
      'PPO reinforcement-learning agent trained on the S&P 500, achieving 34% annualised profit in back-testing across multi-year windows.',
    stack: ['PPO', 'Reinforcement Learning', 'PyTorch', 'Finance'],
    repoStatus: 'private',
    detail: {
      tagline: 'Policy-gradient trading agent',
      overview:
        'A PPO reinforcement learning agent trained on historical S&P 500 data, evaluated through walk-forward back-testing across multi-year windows.',
      architecture: [
        {
          title: 'Environment',
          body: 'Custom gym-style market environment over OHLCV bars with transaction costs, position limits, and a portfolio-state observation.',
        },
        {
          title: 'Policy',
          body: 'Actor-critic MLP trained with Proximal Policy Optimisation. Reward is risk-adjusted return per step.',
        },
        {
          title: 'Back-Test Harness',
          body: 'Walk-forward evaluation across multi-year windows on the S&P 500 universe, with rolling re-training and out-of-sample reporting.',
        },
      ],
      metrics: [
        { value: '34%', label: 'Annualised profit (back-test)' },
        { value: 'Multi-year', label: 'Walk-forward windows' },
        { value: 'S&P 500', label: 'Trading universe' },
      ],
      features: [
        'Custom market gym environment',
        'PPO actor-critic policy in PyTorch',
        'Rolling walk-forward evaluation',
      ],
      tech: ['PyTorch', 'Gym', 'NumPy', 'Pandas'],
    },
  },
  {
    title: 'Autonomous Navigator',
    description:
      'ROS-based navigation stack for indoor robotics: mapping, path planning, and real-time obstacle avoidance.',
    stack: ['ROS', 'C++', 'Robotics'],
    repoStatus: 'private',
    detail: {
      tagline: 'Indoor navigation stack',
      overview:
        'A ROS-based navigation stack for indoor mobile robotics, combining occupancy grid mapping, global and local planning, and reactive obstacle avoidance.',
      architecture: [
        {
          title: 'Mapping',
          body: 'SLAM front-end builds a 2D occupancy grid from LiDAR scans and odometry.',
        },
        {
          title: 'Planning',
          body: 'Global A* planner produces waypoints; a local DWA-style controller tracks them while respecting kinematic limits.',
        },
        {
          title: 'Obstacle Avoidance',
          body: 'Reactive layer fuses laser scans into a costmap inflated for the robot footprint and replans on the fly.',
        },
      ],
      metrics: [
        { value: 'Real-time', label: 'Replanning loop' },
        { value: '2D LiDAR', label: 'Primary sensor' },
        { value: 'ROS', label: 'Middleware' },
      ],
      features: [
        'Occupancy grid SLAM',
        'Global + local planner stack',
        'Costmap-based obstacle inflation',
      ],
      tech: ['ROS', 'C++', 'rviz', 'Gazebo'],
    },
  },
]

export const repoStatusLabels = {
  private: 'Private Repository',
  restricted: 'Access Restricted',
}
