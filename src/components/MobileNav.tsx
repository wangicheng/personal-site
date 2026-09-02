import { useEffect, useState } from 'preact/hooks';
import { Menu, X, ArrowUpRight } from 'lucide-preact';

type Link = { label: string; href: string; external?: boolean };

const MobileNav = ({
	links,
	pathname
}: {
	links: Link[];
	pathname: string;
}) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		const onKey = (e: KeyboardEvent) =>
			e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const isActive = (href: string) =>
		href.startsWith('/') &&
		!href.startsWith('/#') &&
		(pathname === href || pathname.startsWith(`${href}/`));

	return (
		<div class="md:hidden">
			<button
				type="button"
				class="nav-icon-btn"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				onClick={() => setOpen(o => !o)}
			>
				{open ? (
					<X size={20} strokeWidth={2} aria-hidden="true" />
				) : (
					<Menu size={20} strokeWidth={2} aria-hidden="true" />
				)}
			</button>

			<div
				class={`mobile-drawer ${open ? 'is-open' : ''}`}
				aria-hidden={!open}
			>
				<button
					type="button"
					class="mobile-scrim"
					aria-label="Close menu"
					tabIndex={open ? 0 : -1}
					onClick={() => setOpen(false)}
				></button>
				<nav class="mobile-panel" aria-label="Mobile">
					<ul>
						{links.map(l => (
							<li key={l.href}>
								<a
									href={l.href}
									class={`mobile-link ${isActive(l.href) ? 'is-active' : ''}`}
									target={l.external ? '_blank' : undefined}
									rel={l.external ? 'noreferrer' : undefined}
									onClick={() => setOpen(false)}
								>
									{l.label}
									{l.external ? (
										<ArrowUpRight
											size={15}
											strokeWidth={2}
											aria-hidden="true"
										/>
									) : null}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileNav;
