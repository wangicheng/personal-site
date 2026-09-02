export const profile = {
	name: '王藝誠',
	nameEn: 'I-Cheng Wang',
	title: '資工系 · 系統軟體、語法解析與高效能資料結構',
	bio: '以演算法與底層機制為核心，專注於系統軟體、語法解析與高效能資料結構。具備扎實的演算法思維與端到端工程實作力，現正積極投入學術研究與研究所推甄。',
	location: 'Taiwan',
	email: 'r2005.wang@gmail.com',
	githubUsername: 'wangicheng',
	githubUrl: 'https://github.com/wangicheng',
	discordUsername: 'h_bugw7',
	leetcodeUsername: 'h_bugw7',
	leetcodeUrl: 'https://leetcode.com/u/h_bugw7/'
} as const;

export type NavLink = {
	label: string;
	href: string;
	external?: boolean;
};

export const nav: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'Now', href: '/now' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'GitHub', href: 'https://github.com/wangicheng', external: true }
];

export const nowMeta = {
	lastUpdated: 'September 2026',
	location: 'Taiwan',
	currentStatus:
		'Focusing on academic research, distributed systems & graduate school applications.'
} as const;

export type EducationRecord = {
	school: string;
	department: string;
	degree: string;
	period: string;
	gpa: string;
	ranking: string;
	status: string;
	highlights?: string[];
};

export const educationList: EducationRecord[] = [
	{
		school: '國立大學',
		department: '資訊工程學系',
		degree: '工學學士 (B.S.)',
		period: '2023.09 — 2027.06 (Expected)',
		gpa: '4.24 / 4.50',
		ranking: '2 / 104 (Top 2%)',
		status: 'Enrolled'
	}
];

export type CpeRecord = {
	examDate: string;
	score: string;
	percentile: string;
	rank: string;
	note: string;
};

export const cpeRecords: CpeRecord[] = [
	{
		examDate: '2025-03-25',
		score: '7 / 7 Solved',
		percentile: '0.1%',
		rank: '3 / 2,729',
		note: 'CPE 大學程式能力檢定（全國第 3 名 · 7 題全對）'
	},
	{
		examDate: '2024-10-15',
		score: '6 / 7 Solved',
		percentile: '0%',
		rank: '1 / 2,586',
		note: 'CPE 大學程式能力檢定（全國第 1 名 / 全國榜首）'
	}
];

export type HonorItem = {
	year: string;
	title: string;
	organization: string;
	note?: string;
	link?: string;
};

export const honorsList: HonorItem[] = [
	{
		year: 'Ongoing',
		title: 'LeetCode Contest Rating: 2659 Elo (Top 1%)',
		organization: 'LeetCode',
		note: '競賽最高 Rating 達 2659 Elo，成績長年位居全球前 1%。',
		link: 'https://leetcode.com/u/h_bugw7/'
	},
	{
		year: '2024 — 2025',
		title: 'CPE 大學程式能力檢定：全國第 1 名 (2024.10) & 全國第 3 名 (2025.03)',
		organization: '教育部 / CPE 指導委員會',
		note: '2024-10-15 榮獲全國第 1 名（1 / 2,586，0%）；2025-03-25 榮獲 7 題全對全國第 3 名（3 / 2,729，0.1%）。'
	}
];

export type SkillCategory = {
	categoryName: string;
	skills: { name: string; level?: string; description?: string }[];
};

export const categorizedSkills: SkillCategory[] = [
	{
		categoryName: 'Programming Languages',
		skills: [
			{
				name: 'C / C++',
				description: '熟練 STL、指標與記憶體管理、演算法競賽主力語言'
			},
			{
				name: 'Go',
				description: '高並發 Goroutine、Channel、分散式系統與 gRPC 實作'
			},
			{
				name: 'Python',
				description: '非同步 AsyncIO、爬蟲管線、資料處理與機器學習'
			},
			{
				name: 'Rust',
				description: '熟悉記憶體所有權機制、WebAssembly 模組編譯'
			},
			{
				name: 'TypeScript / JavaScript',
				description: '現代前端框架與全端應用程式開發'
			}
		]
	},
	{
		categoryName: 'Systems & Backend',
		skills: [
			{
				name: '系統安全與側寫通道',
				description:
					'隱蔽通道分析 (Covert Channel)、硬體遙測計量、抗編譯器最佳化 (Anti-DCE) 載荷設計'
			},
			{
				name: '分散式協定',
				description: 'Raft 共識演算法、狀態機複製、容錯與分散式儲存'
			},
			{
				name: '底層與二進制架構',
				description:
					'自訂二進位記憶體佈局 (TypedArray/DataView)、AST 語法編譯器、Front-Coding 壓縮'
			},
			{ name: '後端框架', description: 'FastAPI, Gin, Express, Node.js' },
			{
				name: '資料庫與快取',
				description: 'PostgreSQL, MySQL, Redis, SQLite'
			},
			{
				name: '通訊協定',
				description: 'gRPC, Protobuf, RESTful API, WebSockets'
			}
		]
	},
	{
		categoryName: 'Algorithms & Foundations',
		skills: [
			{
				name: '資料結構與演算法',
				description:
					'圖論 (Graph Theory)、動態規劃 (DP)、樹狀結構、貪婪演算法'
			},
			{
				name: '作業系統',
				description:
					'Process / Thread 排程、行程間通訊 (IPC)、記憶體虛擬化、POSIX 介面'
			},
			{
				name: '計算機網路',
				description:
					'TCP/IP 協定堆疊、HTTP/1.1~3、Socket 編程、網路分區除錯'
			}
		]
	},
	{
		categoryName: 'Tools & DevOps',
		skills: [
			{
				name: '版本控制',
				description: 'Git, GitHub, GitLab, CI/CD Actions 自動化部署'
			},
			{
				name: '容器與部署',
				description:
					'Docker, Docker Compose, Linux (Ubuntu/Debian) 伺服器維運'
			},
			{
				name: '測試與分析',
				description: 'GDB, Valgrind 記憶體檢測, Benchmark 效能評測'
			}
		]
	}
];

export type ContactLink = {
	label: string;
	value: string;
	href: string;
	kind: 'email' | 'github' | 'discord' | 'leetcode';
	copyText?: string;
};

export const contactLinks: ContactLink[] = [
	{
		label: 'Email',
		value: profile.email,
		href: `mailto:${profile.email}`,
		kind: 'email',
		copyText: profile.email
	},
	{
		label: 'GitHub',
		value: `github.com/${profile.githubUsername}`,
		href: profile.githubUrl,
		kind: 'github'
	},
	{
		label: 'Discord',
		value: profile.discordUsername,
		href: `https://discord.com`,
		kind: 'discord',
		copyText: profile.discordUsername
	}
];
