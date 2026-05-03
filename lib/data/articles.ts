/**
 * Slugs of the 6 articles featured on /learn, in display order.
 * Used by /learn (listing) and /learn/[slug] (prev/next navigation
 * with wrap-around — last article's "next" is the first, etc.).
 */
export const FEATURED_ARTICLE_SLUGS = [
  'understanding-range-degradation',
  'battery-health-ev-value',
  'why-need-battery-certificate',
  'charging-best-practices',
  'true-cost-ownership-australia',
  'pre-purchase-inspection-guide',
] as const;

export interface Article {
  slug: string;
  image: string;
  title: string;
  description: string;
  category: string;
  content?: string; // HTML content or just text for now
  date?: string;
  author?: string;
}

export const articles: Article[] = [
  {
    slug: "lfp-vs-nmc-australia",
    image: "/assets/articles/lfp-vs-nmc-australia/hero.webp",
    title: "LFP vs. NMC: Which Battery Tech is Better for Australian Drivers?",
    description: "LFP batteries are taking over, but are they right for your needs? We compare the two dominant chemistries in a comprehensive guide.",
    category: "Battery Basics",
    date: "October 30, 2024",
    author: "Dr. Elena Rossi",
    content: `
      <p class="lead">When buying an EV in 2024, you're often choosing between two battery types: Lithium Iron Phosphate (LFP) and Nickel Manganese Cobalt (NMC). The choice you make will impact your range, charging habits, and resale value.</p>
      
      <h3>The Two Contenders</h3>
      <p>Until recently, most long-range EVs used NMC batteries. They are energy-dense and perform well in cold climates. However, LFP batteries (championed by BYD and now Tesla) have surged in popularity due to their durability and lower cost.</p>

      <div class="my-10">
        <img src="https://images.unsplash.com/photo-1706166987869-5482b5ad8dd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwaW9uJTIwYmF0dGVyeSUyMGNlbGxzJTIwbWFjcm98ZW58MXx8fHwxNzcxOTEwOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Lithium Ion Battery Cells" class="rounded-2xl w-full object-cover h-[400px] shadow-lg" />
        <p class="text-sm text-zinc-500 mt-2 text-center">Close-up of cylindrical battery cells used in modern EV packs.</p>
      </div>

      <h3>Head-to-Head Comparison</h3>
      <div class="overflow-x-auto my-8">
        <table class="w-full border-collapse text-left text-sm">
          <thead>
            <tr class="bg-zinc-100 border-b-2 border-zinc-200">
              <th class="p-4 font-semibold text-zinc-900">Feature</th>
              <th class="p-4 font-semibold text-[var(--electric-blue)]">NMC (Nickel Manganese Cobalt)</th>
              <th class="p-4 font-semibold text-[var(--electric-green)]">LFP (Lithium Iron Phosphate)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-zinc-100">
              <td class="p-4 font-medium">Energy Density</td>
              <td class="p-4">High (More range per kg)</td>
              <td class="p-4">Moderate (Heavier for same range)</td>
            </tr>
            <tr class="border-b border-zinc-100 bg-zinc-50/50">
              <td class="p-4 font-medium">Daily Charging</td>
              <td class="p-4">Recommended to 80%</td>
              <td class="p-4">Recommended to 100%</td>
            </tr>
            <tr class="border-b border-zinc-100">
              <td class="p-4 font-medium">Lifespan (Cycles)</td>
              <td class="p-4">1,000 - 2,000 cycles</td>
              <td class="p-4">2,500 - 4,000+ cycles</td>
            </tr>
            <tr class="border-b border-zinc-100 bg-zinc-50/50">
              <td class="p-4 font-medium">Safety</td>
              <td class="p-4">Higher risk of thermal runaway</td>
              <td class="p-4">Extremely stable</td>
            </tr>
            <tr class="border-b border-zinc-100">
              <td class="p-4 font-medium">Cost</td>
              <td class="p-4">Expensive (Cobalt/Nickel)</td>
              <td class="p-4">Cheaper (Iron/Phosphate)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Why LFP is Winning in Australia</h3>
      <p>Australia's unique conditions favor LFP chemistry for several reasons:</p>
      <ul class="list-none pl-0 space-y-4">
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[var(--electric-green)]">✓</span>
          <div>
            <strong>Heat Tolerance:</strong> LFP is more chemically stable at high temperatures, making it safer and more durable during Australian summers.
          </div>
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[var(--electric-green)]">✓</span>
          <div>
            <strong>Longevity:</strong> For drivers doing high mileage (e.g., Uber drivers or regional commuters), LFP can last over 1 million kilometers with proper care.
          </div>
        </li>
        <li class="flex items-start">
          <span class="mr-3 mt-1 text-[var(--electric-green)]">✓</span>
          <div>
            <strong>100% Usable Capacity:</strong> Since you can charge LFP to 100% daily without degradation, a "Standard Range" LFP car often has the same <em>daily usable</em> range as a "Long Range" NMC car charged to 80%.
          </div>
        </li>
      </ul>

      <h3>The Verdict</h3>
      <p>If you need maximum range for frequent interstate road trips or live in the Snowy Mountains (where NMC's cold performance shines), stick with NMC. For the vast majority of Australian drivers, however, <strong>LFP is the smarter, longer-lasting choice</strong>.</p>
    `
  },
  {
    slug: "true-cost-ownership-australia",
    image: "/assets/articles/true-cost-ownership-australia/hero.webp",
    title: "The True Cost of EV Ownership in Australia vs. ICE Vehicles",
    description: "Breaking down the numbers: fuel savings, maintenance costs, and government incentives.",
    category: "Buying & Selling",
    date: "September 15, 2024",
    author: "Marcus Chen",
    content: `
      <h3>The Upfront Premium: EVs vs. ICE Vehicles</h3>
      <p>The sticker price is where electric vehicles traditionally lose the first round. A 2024 Tesla Model 3 Rear-Wheel Drive retails for approximately <strong>$63,900</strong>, while a comparably-sized Toyota Camry Ascent Sport starts at around <strong>$39,990</strong>. That's a $23,910 upfront premium for the EV.</p>
      <p>However, the price gap is narrowing. Government incentives at both federal and state levels are helping to reduce the effective purchase price for many buyers. In states like NSW, EV buyers can access stamp duty exemptions (saving up to $3,000), while the ACT offers up to $15,000 in combined incentives for zero-emission vehicles. Queensland provides interest-free loans for EVs, and Victoria offers rebates for eligible buyers.</p>
      <p>More importantly, the upfront price is only one piece of the total cost of ownership puzzle. What matters is the <strong>lifetime cost</strong> of operating the vehicle—and this is where EVs start to shine.</p>

      <div class="my-10">
        <img src="/assets/articles/true-cost-ownership-australia/inline-1.webp" alt="Solar charging EV" class="rounded-2xl w-full object-cover h-[400px] shadow-lg" />
        <p class="text-sm text-zinc-500 mt-2 text-center">Charging from home solar panels is the ultimate cost-saving strategy for EV owners.</p>
      </div>

      <h3>Running Costs: Fuel, Maintenance, and Registration</h3>
      <p>This is where electric vehicles pull ahead dramatically. Let's break down the three main ongoing cost categories for an average Australian household driving 15,000 kilometres annually:</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Fuel Costs</h4>
        <p class="text-sm text-zinc-700 mb-4">Charging an EV costs significantly less than fuelling an ICE vehicle. Based on current Australian energy prices:</p>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-zinc-700">Toyota Camry (8L/100km @ $2.00/L):</span><span class="font-bold text-red-600">$2,400/year</span></div>
          <div class="flex justify-between"><span class="text-zinc-700">Tesla Model 3 (Grid charging @ $0.25/kWh):</span><span class="font-bold text-blue-600">$600/year</span></div>
          <div class="flex justify-between"><span class="text-zinc-700">Tesla Model 3 (Solar charging @ $0.08/kWh):</span><span class="font-bold text-[#334AFF]">$180/year</span></div>
        </div>
        <p class="text-xs text-zinc-500 italic mt-4 m-0">Annual fuel savings: $1,800 - $2,220</p>
      </div>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Maintenance</h4>
        <p class="text-sm text-zinc-700 mb-4">EVs have significantly fewer moving parts than ICE vehicles. No oil changes, no spark plugs, no timing belts, no exhaust systems, and regenerative braking means brake pads last much longer.</p>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-zinc-700">Toyota Camry (annual service + consumables):</span><span class="font-bold text-zinc-900">$400/year</span></div>
          <div class="flex justify-between"><span class="text-zinc-700">Tesla Model 3 (cabin air filter + tyres + washer fluid):</span><span class="font-bold text-blue-600">$150/year</span></div>
        </div>
        <p class="text-xs text-zinc-500 italic mt-4 m-0">Annual maintenance savings: $250</p>
      </div>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Registration</h4>
        <p class="text-sm text-zinc-700 mb-4">Registration costs vary by state, and some states are introducing road user charges for EVs. In most cases, registration costs are similar between EVs and ICE vehicles, though this varies:</p>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-zinc-700">NSW (both vehicles):</span><span class="font-bold text-zinc-900">~$400/year</span></div>
          <div class="flex justify-between"><span class="text-zinc-700">VIC (EV road user charge):</span><span class="font-bold text-zinc-900">+$300/year</span></div>
          <div class="flex justify-between"><span class="text-zinc-700">QLD (stamp duty exemption for EVs):</span><span class="font-bold text-[#334AFF]">Savings vary</span></div>
        </div>
        <p class="text-xs text-zinc-500 italic mt-4 m-0">Registration costs are roughly equivalent, with some state-specific variations.</p>
      </div>

      <h3>Annual Cost Comparison: The Full Picture</h3>
      <p>Here's how the total annual running costs stack up, assuming 15,000 km of driving per year:</p>

      <table>
        <thead>
          <tr>
            <th>Cost Category (Annual)</th>
            <th>Toyota Camry</th>
            <th>Tesla Model 3 (Grid)</th>
            <th>Tesla Model 3 (Solar)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Fuel/Energy</strong></td><td>$2,400</td><td>$600</td><td>$180</td></tr>
          <tr><td><strong>Maintenance</strong></td><td>$400</td><td>$150</td><td>$150</td></tr>
          <tr><td><strong>Registration (NSW)</strong></td><td>$400</td><td>$400</td><td>$400</td></tr>
          <tr><td><strong>Total Annual Cost</strong></td><td><strong>$3,200</strong></td><td><strong>$1,150</strong></td><td><strong>$730</strong></td></tr>
        </tbody>
      </table>

      <div class="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 rounded-2xl p-8 my-8">
        <p class="font-medium text-zinc-900 text-lg m-0">Annual Savings with EV:</p>
        <p class="text-3xl font-light text-[#334AFF] mt-2 mb-2">$2,050 - $2,470 per year</p>
        <p class="text-sm text-zinc-600 m-0">Over 10 years, that's $20,500 - $24,700 in operating cost savings alone.</p>
      </div>

      <h3>Electric Vehicle Tax Benefits</h3>
      <p>One of the most powerful financial incentives for EV ownership in Australia is the <strong>Fringe Benefits Tax (FBT) exemption</strong> for battery electric vehicles. This applies to EVs purchased or leased through a novated lease arrangement with your employer.</p>

      <div class="bg-[#334AFF]/10 border-l-4 border-[#334AFF] rounded-r-xl p-8 my-8">
        <h4 class="font-bold text-[#334AFF] text-xl mb-4">How the FBT Exemption Works</h4>
        <p class="text-zinc-800">Normally, if your employer provides you with a car through salary sacrifice, you pay Fringe Benefits Tax on the value of that benefit. However, for eligible EVs, this tax is completely exempt, meaning you can pay for the vehicle using <strong>pre-tax salary</strong>.</p>
        <p class="text-sm m-0"><strong>Eligibility:</strong> Battery electric vehicles with a luxury car tax value below $91,387 (2024-25 threshold)</p>
        <p class="text-sm m-0"><strong>Savings potential:</strong> An average income earner ($90,000/year) can save <strong>$4,000 - $6,000 per year</strong> in tax through a novated lease compared to a standard car loan</p>
        <p class="text-sm m-0"><strong>Who benefits most:</strong> Employees in the 37% or 45% tax brackets see the largest percentage savings</p>
      </div>

      <p>State-specific incentives also apply:</p>
      <ul>
        <li><strong>NSW:</strong> Stamp duty exemption (up to $3,000 savings) + $3,000 rebate for EVs under $68,750</li>
        <li><strong>Victoria:</strong> Road user charge of 2.8c/km applies, but $3,000 rebate available for vehicles under $68,740</li>
        <li><strong>Queensland:</strong> Interest-free loans up to $15,000 for new EVs</li>
        <li><strong>ACT:</strong> Up to $15,000 in combined incentives including two years of free registration</li>
        <li><strong>South Australia:</strong> $3,000 subsidy for new EVs under $68,750</li>
      </ul>

      <h3>Verdict: EVs Are Cheaper Over Time</h3>
      <p>When you combine lower running costs with tax benefits and government incentives, the total cost of ownership equation shifts dramatically in favour of electric vehicles:</p>

      <div class="bg-zinc-900 text-white p-8 rounded-2xl my-8">
        <h4 class="text-2xl font-light mb-6">Break-Even Analysis</h4>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-zinc-400 m-0">Without Novated Lease:</p>
            <p class="text-xl font-medium text-white mt-1 mb-1">Break-even at <span class="text-[#334AFF]">5-6 years</span></p>
            <p class="text-xs text-zinc-500 m-0">After this point, every year of ownership increases your savings</p>
          </div>
          <div>
            <p class="text-sm text-zinc-400 m-0">With Novated Lease (FBT Exemption):</p>
            <p class="text-xl font-medium text-white mt-1 mb-1">EV is <span class="text-[#334AFF]">cheaper from day one</span></p>
            <p class="text-xs text-zinc-500 m-0">Lower weekly payments + fuel savings + maintenance savings = immediate financial benefit</p>
          </div>
        </div>
        <div class="border-t border-zinc-700 mt-6 pt-6">
          <p class="text-sm text-zinc-400 mb-3">10-Year Total Cost of Ownership:</p>
          <div class="space-y-2 text-base">
            <div class="flex justify-between"><span class="text-white">Toyota Camry:</span><span class="font-medium text-white">$71,990</span></div>
            <div class="flex justify-between"><span class="text-white">Tesla Model 3 (Grid charging):</span><span class="font-medium text-blue-300">$75,400</span></div>
            <div class="flex justify-between"><span class="text-white">Tesla Model 3 (Solar + Novated lease):</span><span class="font-medium text-[#334AFF]">$54,200*</span></div>
          </div>
          <p class="text-xs text-zinc-500 italic mt-4 m-0">*Includes FBT savings, solar charging benefits, and lower maintenance costs</p>
        </div>
      </div>

      <p>The era of the "expensive" electric vehicle is ending. While the upfront sticker price remains higher, the combination of dramatically lower running costs, zero emissions, superior performance, and generous tax incentives makes EVs increasingly attractive from a pure financial perspective.</p>
      <p>For households with solar panels and access to novated leasing, EVs are already the more economical choice. For everyone else, the break-even point is getting shorter every year as battery costs decline and charging infrastructure expands.</p>
    `
  },
  {
    slug: "understanding-range-degradation",
    image: "/assets/articles/understanding-range-degradation/hero.webp",
    title: "Understanding EV Range Degradation",
    description: "What's normal, what's not, and when it makes sense to book a battery health check.",
    category: "Performance",
    date: "December 15, 2023",
    author: "Tom Baker",
    content: `
      <p>If your EV is not going as far as it used to, do not panic. A drop in displayed range does not always mean the battery is wearing out. Weather, speed, terrain, tyre pressure, heating and cooling use, and charging habits can all affect the number you see on screen.</p>
      <p>The range shown on your dashboard is an estimate, not a direct measure of battery health. Some vehicles calculate it more heavily from recent driving behaviour, while others lean more on standardised efficiency models. That means the number can move around even when the battery itself is performing normally.</p>
      <p>Cold mornings, short trips, highway driving, strong headwinds, and heavy use of cabin heating or air conditioning can all make range appear worse than usual. In many cases, that loss is temporary and improves when conditions change.</p>

      <h3>Why dashboard range can change</h3>
      <div class="my-10">
        <img src="/assets/articles/understanding-range-degradation/inline-1.webp" alt="EV dashboard range display" class="rounded-2xl w-full object-cover h-[400px] shadow-lg" />
        <p class="text-sm text-zinc-500 mt-2 text-center">Dashboard range estimates can vary based on recent driving conditions and climate.</p>
      </div>

      <h3>What normal degradation looks like</h3>
      <p>All EV batteries lose some usable capacity over time. What matters most is the pattern. In many cases, capacity loss is gradual rather than sudden, and it can vary from one vehicle to another.</p>
      <p>Battery ageing is influenced by several factors, including the vehicle design, battery chemistry, climate, mileage, charging behaviour, and how often the battery is exposed to extreme heat or cold. That is why two similar EVs can age differently over time.</p>
      <p>It is also important to separate temporary range loss from permanent degradation. A winter drop in range, or a period of less efficient driving, does not automatically mean the battery has permanently lost capacity.</p>

      <div class="bg-zinc-900 p-8 rounded-2xl my-8 text-white">
        <h4 class="text-center mb-6 font-light text-base">Expected Battery Capacity Over Time</h4>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm text-zinc-400">New</span>
            <div class="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#334AFF]" style="width:100%"></div>
            </div>
            <span class="w-12 text-sm font-mono">100%</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm text-zinc-400">1 Year</span>
            <div class="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#334AFF]" style="width:97%"></div>
            </div>
            <span class="w-12 text-sm font-mono">97%</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm text-zinc-400">3 Years</span>
            <div class="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#334AFF]" style="width:94%"></div>
            </div>
            <span class="w-12 text-sm font-mono">94%</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm text-zinc-400">5 Years</span>
            <div class="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#334AFF]" style="width:92%"></div>
            </div>
            <span class="w-12 text-sm font-mono">92%</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm text-zinc-400">10 Years</span>
            <div class="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#EAB308]" style="width:85%"></div>
            </div>
            <span class="w-12 text-sm font-mono">85%</span>
          </div>
        </div>
        <p class="text-xs text-zinc-500 mt-6 text-center">Illustrative guide only. Battery ageing varies by model, chemistry, climate, mileage, and charging habits.</p>
      </div>

      <h3>When to book a battery health check</h3>
      <p>A battery health check is worth considering if your EV shows a sudden and persistent drop in usable range that cannot be explained by weather, driving conditions, or recent use.</p>
      <p>It is also a good idea to investigate if you notice battery warning messages, charging performance that has changed significantly, or range that is consistently well below what would normally be expected for your vehicle's age and use.</p>
      <p>The best way to understand true battery condition is not to rely on the dashboard estimate alone. A proper battery health assessment gives you a clearer picture of usable capacity and overall battery performance.</p>
    `
  },
  {
    slug: "charging-best-practices",
    image: "/assets/articles/charging-best-practices/hero.webp",
    title: "Charging Best Practices for Battery Health",
    description: "Learn the optimal charging habits to maximize your EV battery's lifespan and maintain peak performance.",
    category: "Maintenance & Care",
    date: "January 10, 2024",
    author: "Dr. Elena Rossi",
    content: `
      <h3>How You Charge Your EV Matters</h3>
      <p>How you charge your electric vehicle is the single biggest factor under your control when it comes to extending battery life. Unlike traditional vehicles where fuel quality is standardised, EV battery longevity is directly influenced by charging behaviour, temperature management, and daily habits.</p>
      <p>The chemistry inside lithium-ion batteries is sensitive to stress from rapid charging, extreme temperatures, and voltage extremes. Thoughtful charging practices can add years to your battery's usable life, maintain better range retention, and protect your vehicle's resale value. The good news is that following a few simple principles makes all the difference.</p>

      <h3>Charging Speed Matters</h3>
      <p>Not all charging methods are equal when it comes to battery health. Fast charging generates significantly more heat than slower charging, and excessive heat is one of the primary causes of battery degradation over time.</p>
      <p><strong>Level 2 charging (7-22kW)</strong> is the sweet spot for daily use. It provides a convenient overnight charge without stressing the battery cells. Most EV owners install a Level 2 wallbox at home, which fully charges the vehicle in 4-8 hours depending on battery size.</p>
      <p><strong>DC fast charging (50-350kW)</strong> should be reserved for road trips and emergency top-ups. While incredibly convenient, frequent use of DC fast charging accelerates battery degradation due to the intense heat generated during rapid energy transfer. Modern EVs have sophisticated thermal management systems, but these can only do so much to mitigate the stress of repeated fast charging.</p>

      <p class="font-medium text-zinc-900 border-l-4 border-[#334AFF] pl-6 my-8">Rule of thumb: Use Level 2 charging for 90% of your daily needs, and save DC fast charging for when you genuinely need rapid replenishment on longer journeys.</p>

      <h3>The 20%-80% Rule: A Crucial Practice</h3>
      <p>Lithium-ion batteries experience the least stress when charged and discharged within the middle range of their capacity. The industry-standard recommendation is to keep your battery between 20% and 80% state of charge for daily use.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-8 my-8">
        <h4 class="font-bold text-zinc-900 text-lg mb-4">Why 20%-80%?</h4>
        <p class="text-sm text-zinc-700"><strong>Below 20%:</strong> Deep discharges cause increased chemical stress on the battery cells, particularly when repeatedly draining below 10%. This accelerates capacity loss over time.</p>
        <p class="text-sm text-zinc-700"><strong>Above 80%:</strong> Holding a high state of charge (especially above 90%) for extended periods creates voltage stress that degrades the cathode material faster. This is why many manufacturers recommend limiting daily charging to 80%.</p>
        <p class="text-sm text-zinc-700 m-0"><strong>100% charges:</strong> Reserve these for road trips when you need maximum range. Charging to 100% occasionally is fine, but avoid leaving your EV sitting at 100% for days on end.</p>
      </div>

      <p>Most modern EVs allow you to set a daily charge limit in the vehicle settings. Setting this to 80% is one of the simplest actions you can take to extend battery life.</p>

      <div class="my-10">
        <img src="/assets/articles/charging-best-practices/inline-1.webp" alt="EV charging display" class="rounded-2xl w-full object-cover h-[400px] shadow-lg" />
        <p class="text-sm text-zinc-500 mt-2 text-center">Modern EVs provide detailed charging information and allow you to set custom charge limits.</p>
      </div>

      <h3>Temperature Matters</h3>
      <p>Battery chemistry is highly temperature-sensitive. Extreme heat and extreme cold both negatively impact battery performance and longevity, making thermal management a critical consideration for EV owners.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#ff6900] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-2">Hot Weather Considerations</h4>
        <p class="text-sm text-zinc-700 m-0">Avoid charging immediately after driving in extreme heat if possible. Let the battery cool down for 20-30 minutes before plugging in. High temperatures during charging accelerate chemical reactions that degrade battery materials. If you live in a hot climate, try to charge during cooler evening or early morning hours, and park in shaded areas when possible.</p>
      </div>
      <div class="bg-[#fafafa] border-l-4 border-[#2b7fff] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-2">Cold Weather Considerations</h4>
        <p class="text-sm text-zinc-700 m-0">In freezing temperatures, charge immediately after driving while the battery is still warm from use. Cold batteries have higher internal resistance, making charging slower and less efficient. Modern EVs use battery heaters to warm the pack before charging, but this consumes energy. Preconditioning your battery (if your vehicle supports it) before arriving at a charging station improves charging speed and efficiency.</p>
      </div>

      <p>Most modern EVs have active thermal management systems with liquid cooling and heating to maintain optimal battery temperature. However, these systems work best when you follow smart charging practices aligned with ambient conditions.</p>

      <h3>Different Types of Chargers and Their Impact</h3>
      <p>Understanding the three main charging types helps you make informed decisions about when to use each method:</p>

      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-white border-2 border-zinc-200 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mb-4">L1</div>
          <h4 class="font-bold text-zinc-900 mb-1">Granny Charger</h4>
          <p class="text-xs text-zinc-500 uppercase tracking-wide mb-4">Standard Powerpoint</p>
          <p class="text-sm m-0"><strong>Speed:</strong> 2-3 kW</p>
          <p class="text-sm m-0"><strong>Charge Time:</strong> 24-48 hours</p>
          <p class="text-sm mb-4"><strong>Health Impact:</strong> <span class="text-green-700 font-semibold">Excellent</span></p>
          <p class="text-xs text-zinc-600 m-0">Slowest but gentlest on the battery. Ideal for overnight charging if you have low daily mileage.</p>
        </div>
        <div class="bg-white border-2 border-[#334AFF] rounded-2xl p-6 shadow-lg">
          <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">L2</div>
          <h4 class="font-bold text-zinc-900 mb-1">Wallbox / Public AC</h4>
          <p class="text-xs text-zinc-500 uppercase tracking-wide mb-4">Home or Shopping Centres</p>
          <p class="text-sm m-0"><strong>Speed:</strong> 7-22 kW</p>
          <p class="text-sm m-0"><strong>Charge Time:</strong> 4-8 hours</p>
          <p class="text-sm mb-4"><strong>Health Impact:</strong> <span class="text-blue-700 font-semibold">Excellent (Recommended)</span></p>
          <p class="text-xs text-zinc-600 m-0">The optimal balance of speed and battery health. Use this for 90% of your charging needs.</p>
        </div>
        <div class="bg-white border-2 border-zinc-200 rounded-2xl p-6">
          <div class="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-4">L3</div>
          <h4 class="font-bold text-zinc-900 mb-1">DC Fast Charger</h4>
          <p class="text-xs text-zinc-500 uppercase tracking-wide mb-4">Highway Stations</p>
          <p class="text-sm m-0"><strong>Speed:</strong> 50-350 kW</p>
          <p class="text-sm m-0"><strong>Charge Time:</strong> 15-45 min</p>
          <p class="text-sm mb-4"><strong>Health Impact:</strong> <span class="text-orange-600 font-semibold">Use Sparingly</span></p>
          <p class="text-xs text-zinc-600 m-0">Convenient for road trips but generates significant heat. Limit to when you genuinely need rapid charging.</p>
        </div>
      </div>

      <h3>For Peace of Mind: Annual Battery Health Checkups</h3>
      <p>Even with perfect charging habits, it's wise to have your battery's health professionally assessed once a year. An annual checkup provides valuable insights that go beyond what your dashboard displays:</p>
      <ul>
        <li><strong>Capacity verification:</strong> Confirm your battery's actual State of Health (SOH) compared to when it was new.</li>
        <li><strong>Cell balance analysis:</strong> Detect imbalances between cell groups that could indicate developing issues.</li>
        <li><strong>Degradation trending:</strong> Track how your battery is ageing compared to the average for your vehicle make and model.</li>
        <li><strong>Warranty validation:</strong> Document your battery condition in case you need to make a warranty claim before coverage expires.</li>
      </ul>
      <p>Think of it like an annual physical exam for your EV. Early detection of issues can save thousands in unexpected repair costs and help you make informed decisions about vehicle maintenance or replacement timing.</p>

      <h3>Drive Longer, Charge Smarter</h3>
      <p>The battery in your electric vehicle is its most valuable component, and how you care for it directly impacts your ownership experience. By following these evidence-based charging practices, you can significantly extend battery life, maintain better range, and protect your vehicle's resale value.</p>
      <p>The core principles are simple: charge slowly when possible, stay within the 20-80% range for daily use, be mindful of temperature, and avoid excessive DC fast charging. Modern EVs make it easy to follow these guidelines with built-in charge limit controls and thermal management systems.</p>
      <p>Every manufacturer has specific recommendations for their battery chemistry and thermal management system. Consult your owner's manual for model-specific guidance, but the principles outlined here apply universally across all lithium-ion EV batteries.</p>
    `
  },
  {
    slug: "why-need-battery-certificate",
    image: "/assets/articles/why-need-battery-certificate/hero.webp",
    title: "Why You Need a Certified Battery Health Report",
    description: "Think of it as a 'Building & Pest' report, but for your electric vehicle. Here is why the EV360 Certificate is your most valuable asset.",
    category: "Buying & Selling",
    date: "February 24, 2026",
    author: "Marcus Chen",
    content: `
      <p>In the world of internal combustion, we have logbooks and odometer readings. In the world of EVs, these don't tell the full story. The EV360 Battery Certificate is the new gold standard for proving your vehicle's worth.</p>

      <h3>What is the EV360 Certificate?</h3>
      <p>It is an independent, third-party verification of your battery's true condition. Unlike the simple "range estimate" on your dashboard, which fluctuates with weather and driving style, our certificate is based on deep diagnostic data extracted directly from the Battery Management System (BMS).</p>
      <p>The EV360 Certificate provides a comprehensive assessment that reveals the actual state of health of your battery pack, measuring usable capacity, cell voltage balance, thermal performance, and degradation patterns over time. This data-driven approach removes guesswork and provides objective evidence of your battery's condition.</p>

      <div class="my-10">
        <img src="/assets/articles/why-need-battery-certificate/inline-1.webp" alt="Handshake over contract" class="rounded-2xl w-full object-cover h-[400px] shadow-lg" />
        <p class="text-sm text-zinc-500 mt-2 text-center">A certified report builds trust between buyer and seller instantly.</p>
      </div>

      <h3>Why Battery Health Matters</h3>
      <p>Understanding battery health is critical for both current owners and prospective buyers. Three key factors demonstrate why certification matters:</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Replacement Costs</h4>
        <p class="text-sm text-zinc-700 m-0">EV battery replacement can cost between $10,000 and $25,000 depending on the make and model. Understanding your battery's current health helps you anticipate future costs and make informed decisions about whether to keep, sell, or repair your vehicle. A certified report protects you from unexpected expenses and helps plan for the vehicle's long-term ownership costs.</p>
      </div>
      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Energy Efficiency</h4>
        <p class="text-sm text-zinc-700 m-0">A healthy battery maintains better driving range and charging efficiency. When battery health degrades, you'll notice reduced range, slower charging times, and decreased performance. A certified health report helps you track degradation patterns and optimise charging habits to extend battery life and maintain the best possible driving range for your daily needs.</p>
      </div>
      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Buyer Confidence</h4>
        <p class="text-sm text-zinc-700 m-0">A certified battery health report eliminates uncertainty for potential buyers. It provides independent verification of your vehicle's condition, building trust and confidence in the transaction. Sellers with certified reports consistently achieve faster sales and higher prices, while buyers gain peace of mind knowing exactly what they're purchasing.</p>
      </div>

      <h3>When Should You Get a Certified Battery Health Report?</h3>
      <p>There are two critical moments when a battery health report becomes essential:</p>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-[#fafafa] p-6 rounded-xl border-l-4 border-[#334AFF]">
          <h4 class="font-bold text-zinc-900 mb-2">When Selling (Crucial)</h4>
          <p class="text-sm text-zinc-700 m-0">Buyers are rightfully cautious about purchasing a used EV without knowing the battery's condition. A certified health report removes this fear, allowing you to command a premium price and sell significantly faster. Vehicles with verified battery health reports consistently sell for 3-5% more than comparable vehicles without certification. The report acts as proof of quality and transparent disclosure, giving buyers the confidence to pay fair market value.</p>
        </div>
        <div class="bg-[#fafafa] p-6 rounded-xl border-l-4 border-[#fb2c36]">
          <h4 class="font-bold text-zinc-900 mb-2">When Buying (Non-Negotiable)</h4>
          <p class="text-sm text-zinc-700 m-0">Never purchase a used EV without seeing a recent, independent battery health report. If the seller cannot or will not provide one, this should raise immediate red flags. The cost of a battery health inspection ($150-$300) is minimal insurance against the risk of inheriting a severely degraded battery worth thousands less than expected. Walk away from any deal that doesn't include verified battery certification.</p>
        </div>
      </div>

      <h3>For Peace of Mind (Annual Checkups)</h3>
      <p>Just like you visit the dentist once a year, an annual battery health checkup is smart EV ownership. Regular monitoring provides valuable benefits that extend beyond buying and selling:</p>
      <ul>
        <li><strong>Track degradation curves:</strong> Compare your battery's performance against the average for your specific make and model, identifying whether degradation is normal or accelerated.</li>
        <li><strong>Identify cell imbalances early:</strong> Detect potential issues before they become critical failures, allowing for proactive maintenance that can extend battery life.</li>
        <li><strong>Warranty eligibility:</strong> Check if your battery qualifies for warranty replacement before your manufacturer's warranty expires. Many warranties cover batteries that fall below 70-80% State of Health.</li>
        <li><strong>Optimise charging habits:</strong> Receive personalised recommendations on charging practices based on your battery's current condition and usage patterns.</li>
      </ul>

      <h3>Case Study: 2019 Nissan Leaf</h3>
      <p>Real-world data demonstrates the tangible value of battery health certification. Consider two identical 2019 Nissan Leafs recently sold in Sydney:</p>

      <div class="bg-zinc-900 text-white p-8 rounded-2xl my-8">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <p class="text-sm text-zinc-400 m-0">Vehicle A (No Report)</p>
            <p class="text-2xl font-light text-white mt-2 mb-4">$27,500</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-zinc-400">Mileage</span><span class="text-white">48,000 km</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Battery Certification</span><span class="text-[#ff6467]">Not provided</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Days on Market</span><span class="text-white">42 days</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Final Sale Price</span><span class="text-white">$26,800</span></div>
            </div>
          </div>
          <div>
            <p class="text-sm text-zinc-400 m-0">Vehicle B (Certified)</p>
            <p class="text-2xl font-light text-[#334AFF] mt-2 mb-4">$28,750</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-zinc-400">Mileage</span><span class="text-white">51,000 km</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Battery Certification</span><span class="text-[#334AFF]">94% SOH (EV360)</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Days on Market</span><span class="text-white">14 days</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Final Sale Price</span><span class="text-[#334AFF]">$28,000</span></div>
            </div>
          </div>
        </div>
        <div class="border-t border-zinc-700 mt-6 pt-6 flex justify-between items-center">
          <span class="text-sm text-zinc-400">Value Premium with Certification</span>
          <span class="text-xl font-bold text-[#334AFF]">+$1,200 (4.5%)</span>
        </div>
        <p class="text-xs text-zinc-500 italic mt-4 m-0">Vehicle B achieved a 4.5% price premium and sold 3× faster despite having higher mileage, demonstrating the market value of verified battery health certification.</p>
      </div>
    `
  },
  {
    slug: "what-is-soh",
    image: "https://images.unsplash.com/photo-1692052664566-477579a08e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBkcml2ZXdheSUyMGhvbWV8ZW58MXx8fHwxNzY0MDY4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "What State of Health (SOH) Means",
    description: "Understanding battery SOH is crucial for knowing your EV's true condition and remaining value.",
    category: "Battery Basics",
    date: "October 12, 2023",
    author: "Dr. Elena Rossi",
    content: `
      <p class="lead">State of Health (SOH) is the single most important metric for any electric vehicle owner to understand. It represents the current maximum capacity of your battery compared to when it was new.</p>
      
      <h3>Why SOH Matters</h3>
      <p>Think of your EV battery like a fuel tank that slowly shrinks over time. When you buy a car with a 60kWh battery, it can hold 60kWh of energy. As the battery degrades, its capacity might drop to 54kWh. In this case, your SOH would be 90%.</p>
      
      <p>A lower SOH means:</p>
      <ul>
        <li>Reduced driving range</li>
        <li>Potentially slower charging speeds</li>
        <li>Lower resale value</li>
      </ul>

      <h3>How SOH is Calculated</h3>
      <p>SOH is a complex calculation that involves measuring the battery's internal resistance, voltage response, and total energy output during a discharge cycle. While your dashboard might show a "100%" charge, that 100% refers to the current available capacity, not the original design capacity.</p>

      <h3>What is a "Good" SOH?</h3>
      <p>Generally speaking:</p>
      <ul>
        <li><strong>95-100%:</strong> Excellent condition (New to 1-2 years old)</li>
        <li><strong>90-95%:</strong> Good condition (2-4 years old)</li>
        <li><strong>80-90%:</strong> Average degradation (4-7 years old)</li>
        <li><strong>Below 80%:</strong> Significant degradation</li>
        <li><strong>Below 70%:</strong> Often the threshold for warranty replacement</li>
      </ul>
    `
  },
  {
    slug: "battery-health-ev-value",
    image: "/assets/articles/battery-health-ev-value/hero.webp",
    title: "How Battery Health Affects EV Value",
    description: "Learn why battery health is crucial in determining the resale value of your electric vehicle.",
    category: "Buying & Selling",
    date: "November 5, 2023",
    author: "Marcus Chen",
    content: `
      <p>In the used EV market, mileage is no longer the primary indicator of value. Battery health has become the single most important factor in determining what your electric vehicle is worth.</p>

      <h3>The New Standard for Valuation</h3>
      <p>Traditional vehicle valuation relied heavily on odometer readings, service history, and cosmetic condition. While those factors still matter, the EV market has introduced a new critical metric: battery State of Health (SOH).</p>
      <p>Two identical EVs with the same age and mileage can have vastly different resale values based solely on their battery condition. A vehicle showing 95% SOH can command thousands of dollars more than one at 82% SOH, even if every other specification is identical.</p>
      <p>This shift reflects the reality that the battery pack represents 30-40% of an EV's total value. Unlike a traditional engine that can run reliably for hundreds of thousands of kilometres with basic maintenance, battery degradation is inevitable and replacement costs are substantial.</p>

      <h3>Why Battery Health Matters</h3>
      <p>Understanding the impact of battery health on EV value requires looking at three key factors:</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Replacement Costs</h4>
        <p class="text-sm text-zinc-700 m-0">EV battery replacement can range from $10,000 to $25,000 depending on the make and model. For vehicles approaching 80% SOH, buyers factor this potential future expense into their purchase decision, significantly reducing what they are willing to pay. A degraded battery essentially represents a hidden liability that savvy buyers discount heavily.</p>
      </div>
      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Energy Efficiency and Range</h4>
        <p class="text-sm text-zinc-700 m-0">A healthy battery delivers the range and performance buyers expect. An EV that originally offered 400km of range but now only achieves 320km due to degradation becomes less practical for daily use. This reduced utility directly translates to lower market value, particularly for buyers who need reliable range for commuting or travel.</p>
      </div>
      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 text-lg mb-2">Buyer Confidence</h4>
        <p class="text-sm text-zinc-700 m-0">The used EV market suffers from information asymmetry. Buyers cannot easily assess battery condition through visual inspection or a test drive. A certified battery health report eliminates this uncertainty, building buyer confidence and justifying premium pricing. Vehicles sold with verified battery health reports consistently achieve faster sales and higher prices.</p>
      </div>

      <h3>Case Study: 2019 Nissan Leaf</h3>
      <p>Recent market data illustrates the tangible impact of battery health on resale value. Two 2019 Nissan Leafs were listed for sale within the same week in Melbourne:</p>

      <div class="bg-zinc-900 text-white p-8 rounded-2xl my-8">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <p class="text-sm text-zinc-400 m-0">Vehicle A</p>
            <p class="text-2xl font-light text-white mt-2 mb-4">$28,500</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-zinc-400">Mileage</span><span class="text-white">45,000 km</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Battery Report</span><span class="text-[#ff6467]">None provided</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Days Listed</span><span class="text-white">34 days</span></div>
            </div>
          </div>
          <div>
            <p class="text-sm text-zinc-400 m-0">Vehicle B</p>
            <p class="text-2xl font-light text-[#334AFF] mt-2 mb-4">$29,800</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-zinc-400">Mileage</span><span class="text-white">52,000 km</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Battery Report</span><span class="text-[#334AFF]">93% SOH Certified</span></div>
              <div class="flex justify-between"><span class="text-zinc-400">Days Listed</span><span class="text-white">12 days</span></div>
            </div>
          </div>
        </div>
        <div class="border-t border-zinc-700 mt-6 pt-6 flex justify-between items-center">
          <span class="text-sm text-zinc-400">Value Difference</span>
          <span class="text-xl font-bold text-[#334AFF]">+$1,300 (4.5%)</span>
        </div>
        <p class="text-xs text-zinc-500 italic mt-4 m-0">Vehicle B sold for $1,300 more despite having 7,000 additional kilometres, purely due to verified battery health certification.</p>
      </div>

      <p>This case study demonstrates a clear market premium for transparency. Vehicle B commanded 4.5% higher value and sold nearly three times faster, despite higher mileage. The certified battery health report transformed a potential concern into a verified asset, giving buyers the confidence to pay more and decide faster.</p>
    `
  },
  {
    slug: "ev-battery-myths",
    image: "https://images.unsplash.com/photo-1738101001619-f0fd42ceafb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBvZmZpY2UlMjBwYXJraW5nfGVufDF8fHx8MTc2NDA2ODY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "EV Battery Myths (Debunked)",
    description: "Separating fact from fiction when it comes to electric vehicle battery degradation and longevity.",
    category: "Battery Basics",
    date: "September 28, 2023",
    author: "Sarah Jenkins",
    content: `
      <p class="lead">There's a lot of misinformation out there about EV batteries. Let's set the record straight on the most common myths.</p>
      
      <h3>Myth 1: EV Batteries need to be replaced every 5 years</h3>
      <p><strong>Fact:</strong> Most modern EV batteries are designed to last the life of the vehicle (15-20 years). While they do degrade, total failure is rare. Most manufacturers offer 8-year warranties.</p>
      
      <h3>Myth 2: You should never charge to 100%</h3>
      <p><strong>Fact:</strong> While it's true that sitting at 100% for long periods causes stress, charging to 100% before a long trip is perfectly fine. LFP (Lithium Iron Phosphate) batteries actually prefer being charged to 100% regularly.</p>

      <h3>Myth 3: Fast charging destroys batteries</h3>
      <p><strong>Fact:</strong> Frequent fast charging can accelerate degradation slightly, but modern thermal management systems do an excellent job of protecting the battery. Occasional fast charging has negligible impact.</p>
    `
  },
  {
    slug: "pre-purchase-inspection-guide",
    image: "/assets/articles/pre-purchase-inspection-guide/hero.webp",
    title: "Essential Checks and Questions When Buying a Used Electric Vehicle to Avoid Costly Mistakes",
    description: "Learn how to avoid costly mistakes by checking these critical items before you buy.",
    category: "Buying & Selling",
    date: "February 2, 2024",
    author: "Marcus Chen",
    content: `
      <h3>The Battery Health Report</h3>
      <p>The battery is the heart of an electric vehicle—and by far the most expensive component. A new battery pack can cost anywhere from <strong>$10,000 to $25,000</strong> depending on the vehicle, making battery health the single most important factor in any used EV purchase decision.</p>
      <p>Unlike a traditional internal combustion engine where you can visually inspect components or listen for warning signs, battery health is invisible to the naked eye. A car might look immaculate, drive perfectly during a test drive, and still hide a severely degraded battery that will cost you thousands in the future.</p>

      <div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-red-800 mb-3">🚨 Critical Warning Signs</h4>
        <p class="text-sm text-red-900 mb-3">Be extremely cautious if you notice any of the following red flags:</p>
        <ul class="text-sm text-red-900 space-y-2 m-0">
          <li><strong>Seller refuses to provide a battery health report</strong> or says they "don't have one"</li>
          <li><strong>Car is always shown at 100% charge</strong> in all listing photos (hiding actual range)</li>
          <li><strong>Dashboard range estimate is suspiciously low</strong> compared to manufacturer specs</li>
          <li><strong>Seller insists on meeting at a location without a charger</strong> to prevent you from testing charge times</li>
          <li><strong>Vehicle history shows frequent rapid charging</strong> at high state-of-charge levels</li>
          <li><strong>Car is from an extreme climate zone</strong> (desert heat or arctic cold) without thermal management</li>
        </ul>
      </div>

      <div class="bg-[#334AFF]/10 border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-[#334AFF] mb-2">💡 Non-Negotiable: Independent Battery Assessment</h4>
        <p class="text-sm text-zinc-800 m-0">Before committing to any used EV purchase, insist on a recent, independent battery health report from a certified provider like EV360. This report should include State of Health (SOH) percentage, cell voltage balance, charging performance metrics, and degradation trends. The cost of an inspection ($150-$300) is minimal insurance against the risk of inheriting a $20,000 battery problem.</p>
      </div>

      <p>A healthy battery should retain at least <strong>85-90% State of Health (SOH)</strong> after 5 years of typical use. Anything below 80% SOH means the vehicle has significantly reduced range and may be approaching warranty replacement thresholds.</p>

      <div class="my-10">
        <img src="/assets/articles/pre-purchase-inspection-guide/inline-1.webp" alt="Inspecting a used EV" class="rounded-2xl w-full object-cover h-[400px] shadow-lg" />
        <p class="text-sm text-zinc-500 mt-2 text-center">A thorough pre-purchase inspection can save you from expensive battery replacement costs.</p>
      </div>

      <h3>Charging Port Inspection</h3>
      <p>The charging port is one of the most frequently used components on an EV, yet it's often overlooked during inspections. A damaged charging port can lead to slow charging speeds, dangerous electrical issues, or complete charging failure—and replacement can cost thousands of dollars.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-4">✅ Charging Port Inspection Checklist</h4>
        <div class="space-y-4 text-sm text-zinc-700">
          <div>
            <p class="font-semibold text-zinc-900 mb-1">1. Visual Inspection of Pins and Contacts</p>
            <ul class="m-0">
              <li>Check all charging pins for <strong>corrosion, rust, or discolouration</strong></li>
              <li>Look for <strong>bent, damaged, or missing pins</strong></li>
              <li>Ensure pins are <strong>clean and free from debris</strong></li>
              <li>Verify that all contacts are <strong>flush and properly aligned</strong></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">2. Signs of Overheating</p>
            <ul class="m-0">
              <li>Look for <strong>melted, warped, or discoloured plastic</strong> around the port</li>
              <li>Check for <strong>burn marks or scorching</strong> on the housing</li>
              <li>Smell for <strong>burnt plastic or electrical odours</strong></li>
              <li>Examine the charging cable connector for similar damage</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">3. Port Door and Seals</p>
            <ul class="m-0">
              <li>Test the <strong>port door mechanism</strong> for smooth operation</li>
              <li>Inspect rubber <strong>seals for cracks, tears, or deterioration</strong></li>
              <li>Check for <strong>water intrusion or moisture inside the port</strong></li>
              <li>Ensure the locking mechanism works properly</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">4. Functional Test</p>
            <ul class="m-0">
              <li>Plug in a <strong>compatible charger and verify it connects properly</strong></li>
              <li>Listen for the <strong>characteristic "click" or lock sound</strong></li>
              <li>Confirm the <strong>vehicle recognises the charger</strong> (check dashboard)</li>
              <li>Monitor the <strong>initial charging rate</strong> to ensure normal operation</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-zinc-700 mt-4 mb-0"><strong>Pro Tip:</strong> If possible, test both AC (slow) and DC (fast) charging. Some vehicles have separate ports or pins for each, and issues with one type might not affect the other.</p>
      </div>

      <h3>Software Updates</h3>
      <p>Electric vehicles are essentially computers on wheels, and software plays a critical role in battery management, charging efficiency, safety systems, and overall performance. An EV running outdated software can have significantly reduced range, slower charging, and missing safety features.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-2">🔄 Battery Management System (BMS) Updates</h4>
        <p class="text-sm text-zinc-700 mb-2">The BMS is the brain that manages battery charging, discharging, thermal regulation, and cell balancing. Manufacturers frequently release BMS updates to improve battery longevity, optimise charging speeds, and address newly discovered issues.</p>
        <p class="text-sm text-zinc-700 m-0"><strong>Ask the seller:</strong> "When was the last software update performed?" and "Are there any outstanding recall notices or software updates pending?" Check the manufacturer's website or contact a dealership to verify.</p>
      </div>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-2">📡 Over-the-Air (OTA) Update Capability</h4>
        <p class="text-sm text-zinc-700 mb-2">Some EVs (like Tesla, Rivian, and newer models from Hyundai/Kia) receive updates wirelessly over the internet. Others require a dealership visit. Understanding this will help you budget for future maintenance.</p>
        <p class="text-sm text-zinc-700 m-0"><strong>Check if:</strong> The vehicle supports OTA updates, Wi-Fi connectivity is functional, and the previous owner kept software up to date.</p>
      </div>

      <div class="bg-[#fafafa] border-l-4 border-red-500 rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-2">⚠️ Outstanding Recalls</h4>
        <p class="text-sm text-zinc-700 mb-2">Software recalls are common in EVs. Check the VIN against manufacturer recall databases to ensure all safety-related updates have been completed.</p>
        <p class="text-sm text-zinc-700 m-0"><strong>Red flag:</strong> If the seller is unaware of any recalls or can't provide documentation that recalls were addressed, walk away or insist on dealership verification before purchase.</p>
      </div>

      <h3>Test Drive & Driving Range</h3>
      <p>The test drive is your opportunity to evaluate real-world performance and validate the battery health claims. Unlike inspecting a petrol car where you listen for engine noise, an EV test drive focuses on smoothness, range accuracy, and acceleration consistency.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-4">🚗 Comprehensive Test Drive Checklist</h4>
        <div class="space-y-4 text-sm text-zinc-700">
          <div>
            <p class="font-semibold text-zinc-900 mb-1">📊 Range Consistency Testing</p>
            <ul class="m-0">
              <li><strong>Start the test drive with a known charge level</strong> (ideally 80-100%)</li>
              <li><strong>Note the displayed range estimate</strong> at the beginning</li>
              <li><strong>Drive a measured distance</strong> (at least 10-15 km) in mixed conditions</li>
              <li><strong>Compare actual distance driven vs. range lost</strong> (should be roughly 1:1 in moderate conditions)</li>
              <li><strong>Check for rapid range drops</strong> when using climate control or acceleration</li>
            </ul>
            <p class="text-xs text-zinc-600 italic mt-2 mb-0">Example: If you drive 10 km and the range drops by 30 km, this indicates either aggressive driving conditions or battery degradation.</p>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">⚡ Acceleration Performance</p>
            <ul class="m-0">
              <li><strong>Test acceleration from a standstill</strong> to highway speeds</li>
              <li><strong>Listen for unusual sounds</strong> (clicking, grinding, or whining from the motor)</li>
              <li><strong>Feel for smooth, linear power delivery</strong> without hesitation or stuttering</li>
              <li><strong>Test regenerative braking at various speeds</strong> and modes</li>
              <li><strong>Verify instant torque response</strong> is consistent with manufacturer specs</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">🔌 Regenerative Braking Behaviour</p>
            <ul class="m-0">
              <li><strong>Test in different regeneration modes</strong> (low, medium, high/one-pedal driving)</li>
              <li>Feel for smooth, predictable deceleration</li>
              <li>Listen for any grinding or unusual brake noises</li>
              <li><strong>Check dashboard for regeneration energy flow</strong> visualisation</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">🌡️ Climate Control Impact</p>
            <ul class="m-0">
              <li><strong>Turn on heating or air conditioning</strong> to maximum</li>
              <li><strong>Observe the range impact</strong> (10-20% drop is normal)</li>
              <li><strong>Test heated seats/steering wheel</strong> as alternatives</li>
              <li><strong>Check cabin preconditioning feature</strong> if available</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">📱 Overall Driving Experience</p>
            <ul class="m-0">
              <li><strong>Test all driver assistance features</strong> (adaptive cruise, lane keeping, etc.)</li>
              <li>Evaluate ride comfort and handling</li>
              <li>Check for rattles, squeaks, or unusual noises</li>
              <li>Verify infotainment system responsiveness</li>
              <li><strong>Test smartphone connectivity</strong> (Apple CarPlay, Android Auto)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-2">⚠️ Range Reality Check</h4>
        <p class="text-sm text-zinc-800 m-0">Keep in mind that official manufacturer range estimates (WLTP or EPA) are tested under ideal laboratory conditions. Real-world range is typically <strong>15-30% lower</strong> depending on driving style, weather, terrain, and use of climate control. A 5-year-old EV showing real-world range that is 25% below WLTP is generally normal; 40-50% below indicates significant degradation.</p>
      </div>

      <h3>Warranty & Documentation</h3>
      <p>The warranty status and service history of a used EV can significantly impact its value and your long-term ownership costs. Unlike traditional cars where warranties are relatively straightforward, EV warranties often have nuanced battery coverage that requires careful review.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-4">📄 Essential Documentation Checklist</h4>
        <div class="space-y-4 text-sm text-zinc-700">
          <div>
            <p class="font-semibold text-zinc-900 mb-1">🛡️ Battery Warranty Coverage</p>
            <ul class="m-0">
              <li><strong>Verify remaining battery warranty duration</strong> (typically 8 years or 160,000 km)</li>
              <li><strong>Check the warranty threshold</strong> (usually covers degradation below 70% SOH)</li>
              <li><strong>Confirm warranty is transferable</strong> to new owners</li>
              <li><strong>Review any warranty exclusions</strong> (flooding, collision damage, modifications)</li>
              <li><strong>Ask if warranty has been claimed previously</strong> for battery-related issues</li>
            </ul>
            <p class="text-xs text-zinc-600 italic mt-2 mb-0">Note: Some manufacturers offer extended battery warranties beyond the standard coverage—check if the seller purchased this option.</p>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">🔧 Service History & Maintenance Records</p>
            <ul class="m-0">
              <li><strong>Request complete service records</strong> from authorised dealerships or certified mechanics</li>
              <li><strong>Verify recommended maintenance intervals</strong> were followed</li>
              <li><strong>Check for any battery-related service alerts</strong> or error codes</li>
              <li><strong>Review tyre rotation and alignment records</strong> (important for heavy EVs)</li>
              <li>Confirm brake fluid, coolant, and cabin air filter changes</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">📋 Vehicle History Report</p>
            <ul class="m-0">
              <li><strong>Obtain a comprehensive vehicle history report</strong> (PPSR in Australia)</li>
              <li><strong>Check for accident history or structural damage</strong> (critical for battery safety)</li>
              <li>Verify odometer readings are consistent</li>
              <li><strong>Look for flood or water damage</strong> (catastrophic for EVs)</li>
              <li>Confirm number of previous owners</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-zinc-900 mb-1">📝 Original Purchase Documentation</p>
            <ul class="m-0">
              <li><strong>Review original purchase agreement</strong> for any special conditions</li>
              <li>Check if vehicle was part of a lease or fleet</li>
              <li>Verify VIN matches all documentation</li>
              <li><strong>Confirm government incentive eligibility</strong> for used EVs (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-3">🔍 Warranty Fine Print: What to Watch For</h4>
        <p class="text-sm text-zinc-800 m-0"><strong>Degradation thresholds:</strong> Most EV warranties only trigger if battery SOH drops below 70% during the warranty period. At 71% SOH, you might be out of luck even if you've experienced significant range loss.</p>
        <p class="text-sm text-zinc-800 m-0"><strong>Voiding conditions:</strong> Modifications, aftermarket parts, racing, commercial use, towing beyond rated capacity, or failing to complete mandatory recalls can all void your warranty.</p>
        <p class="text-sm text-zinc-800 m-0"><strong>Pro-rated coverage:</strong> Some warranties use pro-rated formulas that reduce coverage based on age or mileage, meaning you might only receive partial reimbursement for battery replacement.</p>
      </div>

      <h3>Don't Rush the Purchase</h3>
      <p>Buying a used electric vehicle is a significant investment that requires patience and due diligence. While the lower running costs and environmental benefits of EVs are compelling, rushing into a purchase without proper inspection can lead to costly surprises that overshadow the savings.</p>
      <p>Unlike traditional vehicles where problems are often audible or visible, EV issues—particularly battery degradation—can remain hidden until it's too late. A car that drives perfectly today might need a $20,000 battery replacement in two years if you don't verify its condition properly.</p>

      <div class="bg-[#fafafa] border-l-4 border-[#334AFF] rounded-r-xl p-6 my-6">
        <h4 class="font-bold text-zinc-900 mb-3">✅ Pre-Purchase Action Plan</h4>
        <ol class="text-sm text-zinc-700 list-decimal pl-5 space-y-2 m-0">
          <li><strong>Request a professional battery health report</strong> from EV360 or equivalent certified provider</li>
          <li><strong>Conduct thorough visual inspection</strong> of charging port, exterior, and interior condition</li>
          <li><strong>Perform comprehensive test drive</strong> testing range accuracy, acceleration, and regenerative braking</li>
          <li><strong>Verify all software is up to date</strong> and check for outstanding recalls</li>
          <li><strong>Review complete service history</strong> and warranty documentation</li>
          <li><strong>Obtain vehicle history report</strong> to check for accidents, flooding, or odometer tampering</li>
          <li><strong>Have a certified EV mechanic perform pre-purchase inspection</strong> if possible</li>
          <li><strong>Negotiate price based on battery health</strong> and any identified issues</li>
        </ol>
      </div>

      <p>Remember: a seller who is transparent about battery health, provides complete documentation, and welcomes thorough inspection is far more trustworthy than one who pressures you to "buy now" or dismisses your questions. Taking an extra week to complete all checks is a small price to pay for peace of mind and potentially saving tens of thousands of dollars in future repair costs.</p>
    `
  },
  {
    slug: "ev-warranty-coverage",
    image: "https://images.unsplash.com/photo-1694479452720-782feb4d488b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mzk2OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "EV Warranty Coverage Explained",
    description: "Understanding what's covered, what's not, and how to protect yourself when your warranty expires.",
    category: "Buying & Selling",
    date: "March 15, 2024",
    author: "Sarah Jenkins",
    content: `
      <p class="lead">EV warranties are different from standard car warranties. Here's what you need to know.</p>
      
      <h3>The Federal Mandate (US) & Market Standards</h3>
      <p>Most manufacturers offer an 8-year or 160,000km warranty on the battery and drive unit. This is distinct from the 3-5 year bumper-to-bumper warranty.</p>
      
      <h3>The Degradation Clause</h3>
      <p>Read the fine print! Most warranties only trigger if the battery drops below a certain SOH threshold—typically 70%. If your battery is at 71% after 7 years, you might be out of luck unless you can prove a specific cell failure.</p>
      
      <h3>Voiding Your Warranty</h3>
      <p>Be careful with modifications. Towing beyond rated capacity, ignoring recall notices, or physical damage to the battery pack can all be grounds for denying a warranty claim.</p>
    `
  },
  {
    slug: "battery-chemistry-longevity",
    image: "https://images.unsplash.com/photo-1666612509439-86c532fd2245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGJhdHRlcnklMjBjbG9zZXVwfGVufDF8fHx8MTc2NDExODMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Battery Chemistry and Longevity",
    description: "Deep dive into different EV battery types, their characteristics, and expected lifespan.",
    category: "Battery Basics",
    date: "April 20, 2024",
    author: "Dr. Elena Rossi",
    content: `
      <p class="lead">Not all EV batteries are created equal. The chemistry inside your battery cells dictates its performance and lifespan.</p>
      
      <h3>NMC (Nickel Manganese Cobalt)</h3>
      <p>Used in most long-range EVs (Tesla Long Range, many Hyundais/Kias). Offers high energy density (more range per kg) but is more sensitive to charging to 100%.</p>
      
      <h3>LFP (Lithium Iron Phosphate)</h3>
      <p>Used in standard range models (Tesla Model 3 RWD, BYD). Lower energy density (heavier for the same range) but extremely durable. These batteries can last 2-3x longer than NMC batteries and can be charged to 100% daily.</p>
      
      <h3>Solid State (The Future)</h3>
      <p>The "holy grail" of battery tech. Promising higher density, faster charging, and better safety. Still in development for mass market adoption.</p>
    `
  },
  {
    slug: "climate-impact-ev-batteries",
    image: "https://images.unsplash.com/photo-1665127771643-0bc02014da61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGRyaXZpbmclMjByb2FkfGVufDF8fHx8MTc2NDA2ODk1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Climate Impact on EV Batteries",
    description: "How temperature extremes affect battery performance and what you can do to minimize the impact.",
    category: "Maintenance & Care",
    date: "May 10, 2024",
    author: "Tom Baker",
    content: `
      <p class="lead">Batteries are like humans—they prefer mild temperatures, typically between 15°C and 30°C.</p>
      
      <h3>Cold Weather Performance</h3>
      <p>In freezing temps, chemical reactions slow down. You might see range drop by 20-30%. This isn't permanent damage, just temporary capacity loss. However, charging a frozen battery <em>can</em> cause permanent damage, which is why BMS systems heat the battery before accepting a fast charge.</p>
      
      <div class="my-6 p-6 bg-blue-50 border border-blue-100 rounded-lg">
        <h4 class="font-bold text-blue-800 mb-2">Winter Tip</h4>
        <p class="text-sm text-blue-700">Always use "Preconditioning" features in your EV app while the car is still plugged in at home. This warms the battery using grid power, preserving your range.</p>
      </div>

      <h3>Hot Weather Risks</h3>
      <p>Heat is the silent killer. Sustained exposure to high temperatures (above 40°C) causes permanent chemical degradation. This is why liquid-cooled batteries (like in Teslas) generally last much longer than air-cooled ones (like early Nissan Leafs) in hot climates.</p>
    `
  },
  {
    slug: "australian-ev-infrastructure",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2VyJTIwYXVzdHJhbGlhfGVufDF8fHx8MTc2NDExODk0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Charging Down Under: The State of Australia's EV Infrastructure",
    description: "A deep dive into the rapid growth of Chargefox, Evie, and Tesla networks, and what it means for your daily drive.",
    category: "Maintenance & Care",
    date: "July 12, 2024",
    author: "Marcus Chen",
    content: `
      <p class="lead">Australia's charging network is growing at an exponential rate, but gaps remain. Here is the current state of play.</p>
      
      <h3>The Big Players</h3>
      <p><strong>Chargefox</strong> and <strong>Evie Networks</strong> dominate the non-Tesla space, rapidly expanding ultra-rapid (350kW) sites on major highways. Meanwhile, Tesla has opened select Superchargers to non-Tesla EVs, instantly boosting capacity for all drivers.</p>
      
      <h3>Regional vs. Urban</h3>
      <p>While capital cities are well-served, regional Australia is still playing catch-up. The NRMA's regional network has been a pioneer here, but reliability issues persist at some older sites.</p>
      
      <h3>Future Outlook</h3>
      <p>With government funding pouring into the "National EV Charging Network," the goal is to have a fast charger every 150km on major highways. By 2025, the "charging desert" map will look very different.</p>
    `
  },
  {
    slug: "resale-value-comparison",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQxMTg5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Resale Value: How Australia Compares to Norway and the UK",
    description: "Looking at mature EV markets gives us a crystal ball for Australian resale values. Here's what the data says.",
    category: "Buying & Selling",
    date: "August 20, 2024",
    author: "Dr. Elena Rossi",
    content: `
      <p class="lead">Australia is about 5 years behind Norway in EV adoption. This gives us a unique advantage: we can predict our future by looking at their present.</p>
      
      <h3>The "Valley of Death"</h3>
      <p>In the UK and Norway, early EVs (2011-2015) saw steep depreciation due to small batteries and lack of thermal management. However, modern EVs (2018+) are holding value much better, often outperforming equivalent petrol cars.</p>
      
      <h3>The Battery Health Factor</h3>
      <p>In mature markets, a "Battery Health Certificate" is now standard for private sales. Listings without one sit unsold for weeks. We are starting to see this trend emerge in Australia, where buyers are becoming savvy about State of Health (SOH).</p>
      
      <h3>Prediction for Australia</h3>
      <p>As the used market floods with Model 3s and BYD Attos in 2025-2026, differentiation will key. Vehicles with verified battery health histories will command significant premiums over those without.</p>
    `
  },
  {
    slug: "surviving-australian-summer",
    image: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWFuJTIwc3VtbWVyJTIwaGVhdHxlbnwxfHx8fDE3NjQxMTg5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Surviving an Australian Summer: EV Battery Care in Extreme Heat",
    description: "40°C days can be brutal on batteries. Learn how to protect your EV's longevity when the mercury rises.",
    category: "Maintenance & Care",
    date: "January 4, 2025",
    author: "Tom Baker",
    content: `
      <p class="lead">Australian summers are legendary, but they can be a nightmare for lithium-ion batteries.</p>
      
      <h3>Park in the Shade</h3>
      <p>It sounds simple, but it's vital. Parking in direct sunlight on a 40°C day can raise cabin temps to 70°C and battery temps dangerously high. If you can't find shade, use a windscreen sunshade to reduce cabin heat load.</p>
      
      <h3>The "Plugged In" Advantage</h3>
      <p>Many modern EVs have active thermal management. If you leave your car plugged in (even to a standard powerpoint) on hot days, the car can use grid power to run the AC compressor and cool the battery pack without draining your range.</p>
      
      <h3>Don't Fast Charge Immediately</h3>
      <p>Driving generates heat. Fast charging generates heat. Doing both back-to-back on a scorcher is the hardest thing you can do to a battery. Give the car 15 minutes to cool down before plugging into a 350kW charger if possible.</p>
    `
  }
];
