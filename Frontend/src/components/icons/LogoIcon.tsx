interface LogoIconProps {
	className?: string;
	width?: string;
	heigh?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
	className,
	width = '100',
	heigh = '100'
}) => {
	return (
		<svg
			className={className}
			version='1.1'
			viewBox='0 0 768 768'
			width={width}
			height={heigh}>
			<path
				stroke='none'
				fill='white'
				fillRule='evenodd'
				d='M374.00,572.86C370.98,572.78 363.86,572.34 358.19,571.87C352.52,571.41 342.39,569.91 335.67,568.55C328.95,567.19 318.07,564.24 311.48,562.00C304.89,559.75 294.10,555.28 287.50,552.06C280.90,548.84 271.47,543.34 266.55,539.85C261.63,536.36 254.09,529.97 249.81,525.65C245.52,521.34 239.81,514.50 237.10,510.46C234.40,506.42 230.81,499.53 229.11,495.14C227.42,490.76 225.36,483.24 224.52,478.45C223.68,473.66 223.01,467.66 223.02,465.12C223.03,462.58 223.67,457.52 224.44,453.87C225.21,450.22 226.96,445.04 228.32,442.35C229.68,439.67 232.87,434.71 235.41,431.33C237.95,427.96 243.95,421.91 248.76,417.89C253.57,413.87 257.85,410.12 258.29,409.54C258.72,408.97 258.81,402.65 258.49,395.50C258.17,388.35 257.51,370.81 257.02,356.53C256.13,330.56 256.13,330.56 251.64,326.53C249.18,324.31 246.59,321.38 245.90,320.00C245.06,318.32 244.50,310.43 244.20,295.95C243.81,277.53 243.98,273.94 245.35,271.29C246.23,269.59 248.42,267.30 250.23,266.20C252.03,265.10 265.88,260.18 281.00,255.26C296.12,250.34 310.07,245.88 312.00,245.35C314.87,244.57 315.47,243.96 315.31,241.95C315.21,240.60 314.16,236.12 312.98,232.00C311.66,227.40 310.62,220.19 310.28,213.36C309.73,202.22 309.73,202.22 312.57,200.36C314.99,198.78 317.43,198.50 328.95,198.50C336.40,198.50 343.85,198.72 345.50,199.00C348.42,199.49 348.63,199.24 353.16,190.00C355.72,184.78 359.77,178.17 362.16,175.32C364.55,172.47 369.35,167.85 372.83,165.06C376.31,162.27 383.02,158.11 387.73,155.83C392.60,153.48 398.33,151.48 400.98,151.23C405.26,150.82 405.86,151.05 408.38,154.04C409.89,155.84 412.75,160.50 414.74,164.40C416.72,168.31 419.78,176.00 421.53,181.50C424.72,191.50 424.72,191.50 438.61,192.13C446.25,192.47 453.40,193.10 454.50,193.53C455.60,193.95 457.51,195.21 458.75,196.32C460.62,198.01 461.00,199.39 461.00,204.49C461.00,207.87 460.53,213.30 459.95,216.57C459.37,219.83 457.97,225.36 456.83,228.87C455.11,234.15 454.99,235.38 456.13,236.10C456.88,236.58 458.19,236.98 459.03,236.98C459.88,236.99 473.38,241.30 489.03,246.57C504.69,251.83 520.88,257.79 525.00,259.82C530.19,262.37 533.22,264.58 534.83,267.00C537.07,270.38 537.13,270.97 536.49,284.50C536.13,292.20 535.46,302.10 535.01,306.50C534.20,314.24 534.04,314.62 529.97,318.24C526.50,321.33 525.69,322.74 525.37,326.24C525.16,328.58 524.32,347.38 523.50,368.00C522.69,388.62 521.75,408.89 521.42,413.04C520.83,420.58 520.83,420.58 526.43,427.73C529.51,431.67 533.13,437.09 534.48,439.78C535.83,442.47 537.63,447.31 538.47,450.55C539.31,453.78 540.00,460.17 540.00,464.75C540.00,469.33 539.29,476.51 538.43,480.70C537.56,484.89 535.95,490.74 534.84,493.71C533.72,496.68 530.64,502.35 527.98,506.30C525.33,510.26 519.40,517.21 514.83,521.74C510.25,526.27 502.61,532.84 497.87,536.33C493.12,539.82 485.24,544.73 480.37,547.24C475.49,549.76 467.12,553.63 461.77,555.85C456.42,558.07 447.19,561.28 441.27,562.98C435.35,564.68 425.10,567.17 418.50,568.51C411.90,569.85 400.43,571.40 393.00,571.97C385.57,572.53 377.02,572.93 374.00,572.86zM376.50,553.50C386.64,553.30 398.64,552.43 403.99,551.53C409.20,550.64 417.98,548.77 423.49,547.38C428.99,545.98 437.77,543.25 443.00,541.29C448.23,539.34 457.45,535.27 463.50,532.25C469.55,529.22 478.77,523.93 484.00,520.48C489.23,517.03 497.20,511.00 501.72,507.08C506.23,503.16 511.97,497.10 514.45,493.62C516.94,490.14 520.31,484.41 521.94,480.89C523.58,477.38 525.34,471.80 525.86,468.50C526.40,465.05 526.46,459.10 525.99,454.50C525.55,450.10 524.62,445.26 523.93,443.75C523.24,442.24 522.33,441.00 521.91,441.00C521.49,441.00 520.43,443.46 519.55,446.46C518.68,449.47 516.96,453.08 515.73,454.48C514.50,455.88 506.75,460.85 498.50,465.54C490.25,470.22 469.32,481.16 452.00,489.84C434.68,498.53 416.54,507.28 411.70,509.30C406.86,511.31 399.93,513.48 396.30,514.11C392.60,514.75 386.70,514.98 382.90,514.63C379.16,514.28 371.39,512.45 365.64,510.57C359.88,508.68 340.17,500.76 321.84,492.96C303.50,485.16 284.57,476.76 279.77,474.30C274.97,471.83 269.85,468.88 268.40,467.74C266.95,466.60 265.11,464.11 264.32,462.22C263.53,460.32 262.38,452.07 261.76,443.89C260.97,433.25 260.29,429.00 259.40,429.00C258.71,429.00 255.62,432.04 252.52,435.75C249.43,439.46 245.31,445.70 243.36,449.61C240.51,455.36 239.72,458.26 239.28,464.72C238.95,469.57 239.22,474.85 239.98,478.11C240.66,481.07 243.24,487.55 245.70,492.50C248.16,497.45 251.78,504.20 253.74,507.50C255.70,510.80 258.47,514.80 259.90,516.39C261.33,517.97 265.89,521.81 270.04,524.91C274.18,528.02 281.16,532.42 285.54,534.69C289.92,536.97 298.97,540.66 305.66,542.89C312.35,545.13 323.58,548.12 330.61,549.54C337.64,550.96 346.79,552.52 350.94,553.00C355.10,553.48 366.60,553.70 376.50,553.50zM374.00,539.82C366.57,539.74 358.93,539.52 357.00,539.33C355.07,539.14 349.00,538.28 343.50,537.42C338.00,536.55 329.16,534.76 323.86,533.43C318.55,532.11 310.23,529.62 305.36,527.91C300.49,526.20 291.64,522.36 285.69,519.37C279.75,516.39 273.06,512.80 270.84,511.40C268.61,509.99 264.81,506.86 262.39,504.45C259.98,502.03 258.00,499.65 258.00,499.16C258.00,498.67 263.18,500.91 269.52,504.14C275.86,507.36 281.78,510.00 282.69,510.00C284.05,510.00 283.92,509.55 282.00,507.50C280.71,506.12 280.10,505.00 280.66,505.00C281.21,505.00 287.40,507.25 294.41,510.00C301.42,512.76 313.76,516.80 321.83,519.00C329.90,521.19 341.68,523.86 348.00,524.93C354.32,526.00 366.25,527.19 374.50,527.57C383.85,528.00 394.77,527.81 403.50,527.07C411.20,526.41 422.23,524.78 428.00,523.45C433.77,522.12 443.34,519.71 449.25,518.09C455.16,516.48 460.00,515.53 460.00,515.99C460.00,516.45 458.66,517.95 457.02,519.33C455.38,520.71 451.64,522.97 448.70,524.36C445.75,525.76 439.72,528.22 435.28,529.84C430.84,531.46 423.02,533.77 417.91,534.97C412.80,536.17 403.86,537.78 398.06,538.56C392.25,539.33 381.43,539.90 374.00,539.82zM404.61,496.00C404.88,496.00 408.35,494.47 412.34,492.61C416.32,490.74 424.51,486.96 430.54,484.19C436.57,481.43 449.62,475.13 459.54,470.19C469.45,465.26 478.13,460.55 478.81,459.73C479.68,458.68 480.48,446.75 481.54,418.87C482.36,397.22 483.44,371.18 483.95,361.00C484.51,349.46 484.50,342.14 483.91,341.54C483.31,340.92 481.99,340.97 480.24,341.69C478.73,342.31 466.70,347.41 453.50,353.03C440.30,358.65 424.32,365.26 418.00,367.71C411.68,370.17 406.12,372.54 405.65,372.99C405.18,373.43 404.41,400.51 403.93,433.15C403.45,465.79 403.30,493.29 403.59,494.25C403.89,495.21 404.35,496.00 404.61,496.00zM381.50,493.73C383.47,493.50 383.51,492.57 384.00,434.50C384.33,395.88 384.15,375.10 383.50,374.34C382.95,373.70 379.57,372.29 376.00,371.20C369.50,369.24 369.50,369.24 369.24,424.00C369.10,454.12 369.32,481.18 369.74,484.13C370.46,489.24 370.72,489.61 375.00,491.73C377.48,492.95 380.40,493.85 381.50,493.73zM341.09,487.96C341.41,487.98 341.98,477.13 342.34,463.84C342.70,450.55 343.00,421.57 343.00,399.43C343.00,359.19 343.00,359.19 338.45,357.64C334.33,356.23 333.85,356.24 333.30,357.66C332.97,358.52 332.97,386.51 333.31,419.86C333.64,453.21 334.21,481.53 334.58,482.78C334.95,484.04 336.43,485.71 337.88,486.49C339.32,487.28 340.77,487.94 341.09,487.96zM301.25,469.00C302.00,469.00 302.12,460.29 301.65,439.75C301.28,423.66 300.69,395.76 300.33,377.74C299.90,356.06 299.31,344.69 298.59,344.12C297.99,343.65 292.55,341.63 286.50,339.63C280.45,337.64 274.86,336.00 274.09,336.00C272.92,336.00 272.80,338.80 273.35,353.25C273.71,362.74 274.70,389.61 275.55,412.97C276.87,449.70 277.30,455.68 278.74,457.26C279.65,458.27 284.85,461.32 290.29,464.05C295.73,466.77 300.66,469.00 301.25,469.00zM493.94,452.00C494.55,452.00 497.66,450.69 500.84,449.08C504.02,447.48 507.16,445.51 507.83,444.71C508.63,443.74 509.36,434.99 510.02,418.38C510.56,404.70 511.47,382.02 512.04,368.00C512.60,353.98 513.34,339.24 513.68,335.25C514.12,330.04 513.97,328.00 513.13,328.00C512.48,328.00 509.03,329.43 505.46,331.17C501.09,333.30 498.82,335.03 498.55,336.42C498.32,337.56 497.65,351.10 497.06,366.50C496.46,381.90 495.53,405.75 494.99,419.50C494.44,433.25 493.73,446.19 493.41,448.25C493.03,450.69 493.21,452.00 493.94,452.00zM380.00,361.72C382.50,361.50 382.50,361.50 382.77,343.94C383.04,326.38 383.04,326.38 377.68,324.69C374.74,323.76 371.58,323.00 370.66,323.00C369.18,323.00 369.00,324.85 369.00,340.39C369.00,357.78 369.00,357.78 373.25,359.86C375.59,361.01 378.62,361.85 380.00,361.72zM405.42,359.94C406.01,359.90 416.85,355.72 429.50,350.65C448.23,343.14 452.71,340.97 453.66,338.97C454.29,337.61 455.13,329.41 455.53,320.75C456.05,309.28 455.94,305.00 455.11,305.00C454.49,305.00 447.12,307.88 438.74,311.40C430.36,314.92 419.90,319.19 415.50,320.88C411.10,322.57 406.49,324.67 405.25,325.53C403.08,327.06 403.00,327.66 403.00,342.89C403.00,351.57 403.30,358.97 403.67,359.33C404.03,359.70 404.82,359.97 405.42,359.94zM340.92,347.80C343.50,347.50 343.50,347.50 344.36,331.04C344.83,321.98 345.63,313.48 346.14,312.14C347.02,309.82 347.34,309.74 353.78,310.30C357.48,310.62 365.76,312.26 372.20,313.94C378.63,315.62 385.18,317.00 386.74,317.00C388.31,317.00 394.75,315.24 401.05,313.09C407.35,310.94 419.02,306.84 427.00,304.00C434.98,301.15 444.88,297.62 449.00,296.16C453.36,294.61 456.50,292.93 456.50,292.14C456.50,291.39 450.88,287.91 444.00,284.41C437.12,280.91 427.90,276.63 423.50,274.89C415.50,271.74 415.50,271.74 397.50,272.57C387.60,273.03 374.10,273.44 367.50,273.48C360.90,273.51 354.38,273.92 353.00,274.39C351.62,274.86 342.40,278.61 332.50,282.73C322.60,286.85 312.35,291.38 309.71,292.79C305.86,294.86 305.18,295.60 306.21,296.59C306.92,297.27 309.94,298.54 312.93,299.41C315.92,300.29 319.29,301.00 320.43,301.00C321.57,301.00 327.45,298.80 333.50,296.11C339.55,293.43 349.00,289.55 354.50,287.50C360.00,285.44 369.00,282.63 374.50,281.24C383.80,278.89 385.10,278.79 393.03,279.84C397.72,280.47 403.91,281.68 406.78,282.53C409.65,283.38 412.00,284.50 412.00,285.01C412.00,285.52 409.64,286.61 406.75,287.43C403.86,288.25 391.38,291.66 379.00,295.02C366.62,298.38 351.77,302.70 346.00,304.62C340.23,306.54 335.12,308.48 334.66,308.94C334.20,309.40 333.87,317.59 333.93,327.14C334.03,343.63 334.14,344.59 336.19,346.30C337.37,347.29 339.50,347.96 340.92,347.80zM467.92,336.00C468.36,336.00 471.63,334.68 475.18,333.07C478.73,331.46 482.13,329.55 482.73,328.82C483.35,328.07 484.19,319.95 484.66,310.11C485.31,296.66 485.21,292.02 484.22,289.66C483.09,286.98 483.15,286.49 484.72,285.56C485.70,284.98 492.57,281.99 500.00,278.91C507.43,275.83 515.07,272.50 516.99,271.50C520.13,269.88 520.28,269.62 518.49,268.96C517.40,268.56 508.40,265.66 498.50,262.52C488.60,259.38 474.88,254.62 468.00,251.96C461.12,249.29 454.34,246.83 452.92,246.49C450.74,245.96 449.77,246.58 446.50,250.56C444.38,253.15 439.92,257.27 436.58,259.73C433.23,262.19 430.50,264.69 430.50,265.29C430.50,265.89 432.98,266.99 436.00,267.73C439.02,268.48 446.45,271.52 452.50,274.50C458.55,277.47 466.54,282.21 470.25,285.03C473.96,287.85 477.00,290.79 477.00,291.56C477.00,292.33 475.21,293.87 473.02,294.99C470.60,296.22 468.85,297.91 468.57,299.26C468.32,300.49 467.68,308.92 467.15,318.00C466.62,327.07 466.40,334.83 466.65,335.25C466.91,335.66 467.48,336.00 467.92,336.00zM285.50,327.73C287.39,327.51 287.51,326.65 287.77,311.37C288.02,296.71 287.89,295.17 286.27,294.51C285.30,294.11 279.35,292.03 273.05,289.89C266.75,287.75 261.01,286.00 260.30,286.00C259.34,286.00 259.00,288.15 259.01,294.25C259.01,298.79 259.30,306.24 259.66,310.80C260.28,318.81 260.42,319.16 263.40,320.72C265.11,321.61 270.32,323.61 275.00,325.15C279.68,326.70 284.40,327.86 285.50,327.73zM501.81,322.00C502.19,322.00 506.10,320.15 510.50,317.90C514.90,315.64 519.28,313.11 520.23,312.26C521.18,311.42 522.19,309.32 522.48,307.61C522.77,305.90 523.46,298.91 524.02,292.07C524.58,285.23 524.69,279.30 524.27,278.89C523.85,278.48 519.23,279.95 514.00,282.17C508.77,284.39 504.05,286.62 503.50,287.14C502.95,287.66 502.00,295.38 501.40,304.29C500.79,313.21 500.48,320.84 500.71,321.25C500.93,321.66 501.43,322.00 501.81,322.00zM292.78,287.90C293.49,287.95 299.56,285.48 306.28,282.39C313.00,279.31 323.66,274.85 329.97,272.49C336.28,270.12 341.55,267.81 341.68,267.34C341.82,266.88 338.41,264.14 334.11,261.25C329.80,258.36 325.26,256.00 324.00,256.00C322.74,256.00 318.52,256.94 314.61,258.08C310.70,259.23 298.73,263.02 288.00,266.50C277.27,269.99 267.04,273.14 265.26,273.50C263.48,273.86 261.75,274.60 261.41,275.14C261.07,275.69 261.06,276.39 261.38,276.71C261.70,277.03 268.60,279.65 276.73,282.54C284.85,285.43 292.08,287.84 292.78,287.90zM367.75,261.88C370.31,261.98 371.00,261.60 371.00,260.11C371.00,258.94 367.31,255.21 361.22,250.23C355.84,245.83 348.17,238.96 344.17,234.97C340.18,230.97 335.75,225.73 334.33,223.31C332.92,220.89 331.95,218.71 332.20,218.47C332.44,218.23 338.00,221.06 344.57,224.75C353.26,229.65 358.42,233.37 363.59,238.48C368.43,243.28 371.18,246.93 372.27,250.00C373.14,252.47 374.22,255.85 374.66,257.50C375.37,260.16 375.50,259.89 375.79,255.06C375.97,252.07 375.36,246.22 374.44,242.06C373.52,237.90 371.74,232.47 370.49,230.00C369.24,227.52 365.70,223.11 362.61,220.19C359.53,217.28 354.54,213.80 351.54,212.47C348.53,211.14 343.24,209.60 339.78,209.03C336.33,208.47 330.69,208.01 327.25,208.01C321.54,208.00 321.00,208.18 321.00,210.13C321.00,211.30 322.40,216.37 324.12,221.38C325.84,226.40 328.60,233.20 330.25,236.50C332.12,240.23 335.98,245.19 340.47,249.62C346.52,255.58 348.73,257.07 354.09,258.80C357.62,259.94 361.40,261.07 362.50,261.32C363.60,261.57 365.96,261.82 367.75,261.88zM397.00,260.81C398.93,260.89 403.64,260.51 407.47,259.95C411.30,259.40 416.88,257.83 419.86,256.47C423.27,254.90 427.73,251.49 431.89,247.24C435.81,243.25 439.99,237.65 442.16,233.50C444.18,229.65 446.99,222.47 448.41,217.54C449.84,212.62 451.00,207.33 451.00,205.79C451.00,203.00 451.00,203.00 439.25,203.02C430.98,203.03 425.33,203.60 420.17,204.94C416.14,205.98 410.39,208.04 407.38,209.52C404.37,210.99 399.34,214.58 396.20,217.49C393.07,220.41 389.06,225.20 387.29,228.15C385.53,231.09 383.39,236.18 382.54,239.46C381.69,242.74 381.00,246.26 381.00,247.29C381.00,248.32 381.41,249.02 381.91,248.83C382.41,248.65 384.89,245.68 387.41,242.24C389.96,238.78 395.02,233.76 398.75,231.00C402.81,228.00 409.48,224.44 415.50,222.08C421.00,219.92 426.74,217.84 428.25,217.47C430.06,217.02 431.00,217.18 431.00,217.94C431.00,218.57 426.88,223.35 421.84,228.55C416.24,234.35 408.71,240.73 402.43,245.00C396.78,248.84 390.78,253.37 389.08,255.07C387.39,256.77 386.00,258.54 386.00,259.02C386.00,259.49 387.69,260.06 389.75,260.27C391.81,260.49 395.07,260.73 397.00,260.81zM381.80,217.00C382.21,217.00 383.99,211.04 385.76,203.77C388.12,194.04 390.36,187.74 394.23,180.02C399.50,169.50 399.50,169.50 399.77,186.76C400.05,204.03 400.05,204.03 403.08,202.46C404.74,201.60 406.98,200.02 408.05,198.95C409.57,197.43 410.00,195.61 410.00,190.66C410.00,187.17 409.14,180.94 408.08,176.81C407.02,172.69 405.34,167.56 404.33,165.42C403.32,163.28 401.69,161.37 400.70,161.18C399.71,160.99 395.89,162.78 392.23,165.17C388.56,167.55 382.32,172.73 378.36,176.69C372.98,182.06 370.13,185.97 367.08,192.19C364.83,196.76 362.72,201.94 362.38,203.69C361.88,206.34 362.26,207.33 364.57,209.48C366.11,210.91 368.03,211.95 368.83,211.79C369.63,211.63 370.67,210.82 371.14,210.00C371.61,209.18 372.89,206.03 373.99,203.00C375.09,199.97 377.00,195.93 378.24,194.00C380.50,190.50 380.50,190.50 380.78,203.75C380.93,211.04 381.39,217.00 381.80,217.00z'
			/>
		</svg>
	);
};
