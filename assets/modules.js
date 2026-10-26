/* YBK Leadership Lab — module content.
   Each module: scenario → idea → tool → decide → check → commit → certificate.
   decide.options: exactly one has best:true. check.a = index of the correct option. */

window.TRACKS = [
  { id: 1, name: "Lead Yourself First", blurb: "Influence, example, reliability and self-control.", color: "t1" },
  { id: 2, name: "Communicate Clearly", blurb: "Clear asks, real listening, feedback that helps, and hard news.", color: "t2" },
  { id: 3, name: "Manage People", blurb: "Delegating, checking in, leading friends and following up.", color: "t3" },
  { id: 4, name: "Resolve Conflict", blurb: "Keep conflict about the work, catch it early, and know when to bring in Fitz.", color: "t4" },
  { id: 5, name: "Let It Go", blurb: "Don't take it personally, check your story, release offenses, repair.", color: "t5" },
  { id: 6, name: "Build the Team", blurb: "Trust, belonging, good meetings, making the call and leaving it better.", color: "t6" }
];

window.MODULES = [
/* ---------------- TRACK 1 ---------------- */
{
  n: 1, track: 1, min: 6,
  title: "Influence vs. Title",
  hook: "Being named editor doesn't make people follow you.",
  scenario: "You were named Design Editor in August. During your first Sprint, you post in the group chat: \"Templates due Friday.\" Two staffers react with a thumbs-up. Friday comes, and three of five templates are missing. One staffer says, \"I didn't think it was a real deadline.\"",
  idea: "A title gives you permission to lead. It doesn't give you followers. People follow editors they trust: editors who are fair, prepared and willing to do the work themselves. Influence is built in small moments, long before the deadline that matters.",
  tool: { name: "The Influence Bank", steps: [
    ["Deposits", "Keep small promises. Help without being asked. Give credit to others."],
    ["Withdrawals", "Broken promises. Criticism in front of others. Playing favorites."],
    ["The balance", "When you need to make a hard ask, you spend what you saved. No savings, no follow-through."]
  ]},
  decide: { prompt: "It's Monday. Three templates are still missing. What do you do?", options: [
    { t: "Post in the group chat: \"Apparently some of you don't take deadlines seriously.\"", r: "Public criticism is a big withdrawal. People get defensive, not faster, and everyone else learns you'll call them out too." },
    { t: "Talk to each of the three in person. Restate the deadline, ask what got in the way, and set a check-in for tomorrow.", r: "Personal, clear and respectful. You restate the expectation, you learn what's really going on, and you make a deposit while you do it.", best: true },
    { t: "Make the three templates yourself so the Sprint stays on track.", r: "The deadline is met, but your staff just learned your deadlines are optional. You'll be doing their work all year." }
  ]},
  check: { q: "Which of these builds influence fastest?", options: ["Announcing your title at the first staff meeting", "Keeping small promises every day", "Being the strictest editor on staff"], a: 1, why: "Influence comes from trust, and trust comes from many small promises kept. A title or strictness alone doesn't earn it." },
  commit: "This week, one deposit I'll make is…"
},
{
  n: 2, track: 1, min: 6,
  title: "Setting the Example",
  hook: "Your staff copies what you do, not what you say.",
  scenario: "You remind staff that phones stay away during work time unless they're shooting or editing. Ten minutes later, a staffer sees you scrolling. Later you overhear: \"Rules for us, not for editors.\"",
  idea: "Every rule you quietly break becomes a rule nobody follows. Your staff watches you closely, especially when you think no one is looking. The quickest test is simple: would I accept this from my staff?",
  tool: { name: "The Mirror Check", steps: [
    ["Ask", "Would I accept this from a staffer?"],
    ["Picture it", "If my whole staff copied me today, would the book be better or worse?"],
    ["Own it", "If I slipped, I say so out loud and fix it."]
  ]},
  decide: { prompt: "A staffer calls you out in front of the room: \"Why do you get to be on your phone?\" What do you say?", options: [
    { t: "\"Editors need their phones for the group chat.\"", r: "Even if it's partly true, it sounds like an excuse, and it confirms what they suspected: the rules don't apply to you." },
    { t: "\"You're right. I'll put mine away too.\" Then put it away.", r: "Two seconds of humility earns a lot of respect. You just showed everyone the rule is real, for everyone.", best: true },
    { t: "\"Worry about your own work.\"", r: "Defensive answers spend trust fast. The room now believes the rule is only for them." }
  ]},
  check: { q: "What is the first question in the Mirror Check?", options: ["Will anyone notice?", "Would I accept this from a staffer?", "Is this technically against the rules?"], a: 1, why: "The Mirror Check starts with holding yourself to the same standard you hold your staff to." },
  commit: "One habit I'll model for my staff this week is…"
},
{
  n: 3, track: 1, min: 5,
  title: "Reliability",
  hook: "Small promises, closed loops.",
  scenario: "On Monday you told a writer you'd look at their interview questions \"later today.\" You forgot. It's Wednesday, the writer still hasn't done the interview, and their copy deadline is Thursday.",
  idea: "Every \"I'll get back to you\" is a promise. Leaders who close loops get trusted with bigger things. Leaders who drop them get worked around. Reliability isn't one big moment; it's dozens of small ones.",
  tool: { name: "Close the Loop", steps: [
    ["Say a time", "Not \"later.\" Say \"by the end of class\" or \"tomorrow, 2nd period.\""],
    ["Write it down", "Put it where you'll see it: your planner, a phone reminder, a sticky note on your laptop."],
    ["Close it", "Deliver it. Or, before the time passes, tell them it will be late and when it will come."]
  ]},
  decide: { prompt: "It's Wednesday. What do you do?", options: [
    { t: "Avoid the writer and hope they figured it out.", r: "The writer is stuck because of you, and avoiding them makes it worse. This is how trust quietly drains away." },
    { t: "Apologize, review the questions right now, and help them plan the interview so they can still make Thursday.", r: "You own it and fix it fast. The writer gets what they need and learns you follow through, even when you slip.", best: true },
    { t: "Tell the writer they should have reminded you.", r: "You made the promise, so the loop is yours to close. Blaming them teaches staff not to count on you." }
  ]},
  check: { q: "You promised feedback by Friday, but you'll be absent Friday. What's the best move?", options: ["Send it next week without saying anything", "Message them Thursday: \"Feedback will be Monday by 2nd period.\"", "Skip it. They'll figure it out."], a: 1, why: "Closing the loop includes telling people early when something will be late, and giving a new time." },
  commit: "One loop I need to close this week is…"
},
{
  n: 4, track: 1, min: 5,
  title: "Owning Your Mistakes",
  hook: "Own it, fix it, prevent it. No excuses attached.",
  scenario: "You approved a spread with a misspelled name in a caption. It gets caught on proofing day. The staffer who wrote the caption is getting blamed in the room, but you're the one who approved it.",
  idea: "Owning a mistake costs a little pride and earns a lot of trust. An excuse makes people wonder what else you're hiding. When the leader owns mistakes, staff feel safe owning theirs.",
  tool: { name: "Own · Fix · Prevent", steps: [
    ["Own", "\"I approved it. That's on me.\" No \"but.\""],
    ["Fix", "Say what you're doing about it right now."],
    ["Prevent", "Say what you'll do differently next time."]
  ]},
  decide: { prompt: "What do you say to the room?", options: [
    { t: "\"I approved it, but the writer should have double-checked the names.\"", r: "The \"but\" cancels the apology. Everyone hears blame, not ownership." },
    { t: "\"I approved it without checking the names. I'll fix it today, and I'll check every name before I approve from now on.\"", r: "Own, fix, prevent, in two sentences. The writer is protected, and the staff sees what accountability looks like.", best: true },
    { t: "Say nothing. The writer made the first mistake.", r: "Silence lets someone else take the hit for your approval. People notice, and they remember." }
  ]},
  check: { q: "Which word most often cancels an apology?", options: ["Sorry", "But", "I"], a: 1, why: "\"I'm sorry, but…\" turns an apology into an excuse. Leave the \"but\" out." },
  commit: "Next time I make a mistake, the first sentence I'll say is…"
},
{
  n: 5, track: 1, min: 6,
  title: "Managing Your Reaction",
  hook: "You can't control the first feeling. You can control the next move.",
  scenario: "It's proofing day. A staffer says, loud enough for others to hear, \"This design is ugly. Who even approved it?\" You approved it. Your face gets hot.",
  idea: "Leaders who react in the heat of the moment usually spend the next week cleaning up. A short pause gives your thinking brain time to catch up with your feelings. Then you can choose a response that helps the team.",
  tool: { name: "Pause · Name · Choose", steps: [
    ["Pause", "Breathe. Count to five. Unclench your jaw."],
    ["Name it", "Silently: \"I feel embarrassed.\" Naming a feeling turns its volume down."],
    ["Choose", "Ask: what response helps the book and the team right now?"]
  ]},
  decide: { prompt: "After your pause, what do you say?", options: [
    { t: "\"Well, maybe if you turned your spreads in on time, you'd get a say.\"", r: "It feels good for one second. Then it becomes a public fight, and you've lost the room." },
    { t: "\"Show me what you'd change. Let's look at it together after this proofing round.\"", r: "Calm, open and in control. You turn a jab into feedback, and you move it out of the spotlight.", best: true },
    { t: "Say nothing, then complain about the staffer to another editor later.", r: "Venting to staff spreads drama and gets back to people. The problem stays, and trust drops." }
  ]},
  check: { q: "Why name the feeling in your head?", options: ["So you can tell everyone how you feel", "Naming it lowers its intensity so you can think clearly", "It proves the other person was wrong"], a: 1, why: "Putting a feeling into words helps calm it down, so you respond instead of react." },
  commit: "When I feel the heat this week, my pause will be…"
},

/* ---------------- TRACK 2 ---------------- */
{
  n: 6, track: 2, min: 5,
  title: "Clear Asks",
  hook: "Who, what, when, and what \"done\" looks like.",
  scenario: "You tell a photographer, \"Can you get some pics at the pep rally?\" They come back with 12 blurry crowd shots taken from the top of the bleachers. You needed sharp close-ups of the dance team for a spread.",
  idea: "Most \"they didn't do it right\" problems start with an unclear ask. When an ask is vague, people fill in the gaps with guesses. Clear asks save everyone time, including you.",
  tool: { name: "Who · What · When · Done", steps: [
    ["Who", "Name the person. \"Anyone\" means no one."],
    ["What", "The exact task, not the general idea."],
    ["When", "A day and a time."],
    ["Done looks like", "How they'll know it's finished and good enough."]
  ]},
  decide: { prompt: "Which ask is clearest?", options: [
    { t: "\"Get good pics at the pep rally.\"", r: "Good according to whom? There's no who, no when and no picture of done." },
    { t: "\"Can someone help with the pep rally?\"", r: "\"Someone\" usually means no one, and \"help\" could mean anything." },
    { t: "\"Jordan, shoot the dance team at Friday's pep rally. I need at least 10 sharp action shots, close enough to see faces. Upload by Monday, 1st period.\"", r: "Who, what, when and done, all in one breath. Jordan knows exactly what success looks like.", best: true }
  ]},
  check: { q: "What does \"Done looks like\" add to an ask?", options: ["A due date", "How the person knows it's finished and good enough", "Who is responsible"], a: 1, why: "\"Done looks like\" describes the finished product, so nobody has to guess what you wanted." },
  commit: "One ask I'll rewrite this week using Who · What · When · Done is…"
},
{
  n: 7, track: 2, min: 5,
  title: "Listening to Understand",
  hook: "Find the real problem before you fix it.",
  scenario: "A staffer says, \"I don't know if I can do the club spread.\" You immediately give design tips. They nod. Three days later the spread is still blank. It turns out the club sponsor won't answer their emails.",
  idea: "Leaders often answer the question they think they heard. Listening to understand means slowing down long enough to find the real problem. The fix only works if it fixes the right thing.",
  tool: { name: "Ask · Reflect · Respond", steps: [
    ["Ask", "An open question: \"What's making it hard?\""],
    ["Reflect", "Say it back in your own words: \"So the sponsor hasn't answered, and you're stuck.\""],
    ["Respond", "Only after they say, \"Yes, that's it.\""]
  ]},
  decide: { prompt: "A staffer says, \"This spread is impossible.\" What's your first response?", options: [
    { t: "\"It's not impossible. Just start.\"", r: "It shuts the conversation down, and you still don't know what's wrong." },
    { t: "\"What part feels impossible?\"", r: "One open question, and now you can find out what's actually in the way.", best: true },
    { t: "\"Every spread is hard. Welcome to yearbook.\"", r: "Maybe true, but it tells them you're not interested in their problem." }
  ]},
  check: { q: "In this tool, what does \"Reflect\" mean?", options: ["Thinking quietly about your own experience", "Saying back what you heard in your own words", "Giving advice"], a: 1, why: "Reflecting checks that you understood, and it shows the other person you were really listening." },
  commit: "In my next conversation with a staffer, the open question I'll ask is…"
},
{
  n: 8, track: 2, min: 6,
  title: "Feedback That Helps",
  hook: "Specific, about the work, and clear about what's next.",
  scenario: "A first-year staffer submits a spread. You write: \"Needs work. Fonts are off.\" They change two fonts at random and resubmit. It's still not right. Now you're both frustrated.",
  idea: "Feedback helps when it's specific, about the work rather than the person, and clear about what to do next. Vague feedback creates guessing. Harsh feedback creates defensiveness. Our program uses KEEP / FIX / TRY for exactly this reason.",
  tool: { name: "KEEP · FIX · TRY", steps: [
    ["KEEP", "One specific thing that works, and why it works."],
    ["FIX", "What must change, exactly where, tied to the standard."],
    ["TRY", "One idea to push it further. Optional, but useful."]
  ]},
  decide: { prompt: "Which feedback will actually help this staffer?", options: [
    { t: "\"Looks great!\"", r: "Nice to hear, but if the spread needs fixes, this sets them up to fail later." },
    { t: "\"KEEP: The dominant photo is strong. It pulls the eye right in. FIX: The headline isn't in the template's headline style; swap it to match. TRY: Pull a quote from your interview for a secondary entry.\"", r: "Specific praise, an exact fix and a next-level idea. The staffer knows what to keep, what to change and where to grow.", best: true },
    { t: "\"Fonts are wrong again. Please read the style guide.\"", r: "\"Again\" stings, and \"read the guide\" doesn't say what's wrong. Expect another random guess." }
  ]},
  check: { q: "Which of these belongs under FIX?", options: ["\"Cool photos!\"", "\"The caption under the top-right photo is missing the names.\"", "\"Maybe try a different color scheme sometime.\""], a: 1, why: "A FIX is specific, located and required. The third option is a TRY, and the first is too vague for KEEP." },
  commit: "The next time I give feedback, my KEEP will be specific because I'll…"
},
{
  n: 9, track: 2, min: 5,
  title: "Taking Feedback",
  hook: "Feedback is about the work, not a verdict on you.",
  scenario: "You spent all weekend on your spread. Your EIC puts it on Hold with three notes, including \"rewrite the caption under the dominant.\" Your first thought: \"They don't get what I was going for.\"",
  idea: "Editors ask staff to take feedback all year. How you take it teaches them how to take yours. Feedback is information about the work. It isn't a judgment of who you are.",
  tool: { name: "Thank · Clarify · Decide", steps: [
    ["Thank", "\"Thanks for looking at it.\" Even if it stings."],
    ["Clarify", "Ask questions until you understand. Don't defend yet."],
    ["Decide", "Make the fix, or later raise a concern calmly, with a reason tied to the standard."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Explain to your EIC why each note is wrong.", r: "Defending everything shuts down feedback, and your staff will learn to do the same thing to you." },
    { t: "Say thanks, then ask, \"For the caption, which part needs the rewrite?\" Then fix it.", r: "You stay open, get exactly what you need, and show your staff how to take a Hold.", best: true },
    { t: "Make the changes without a word, then tell friends the EIC is too picky.", r: "The spread gets fixed, but the venting gets around. It costs trust on both sides." }
  ]},
  check: { q: "In Thank · Clarify · Decide, when do you raise a disagreement?", options: ["Immediately, before they finish", "After you understand the note, calmly and with a reason", "Never"], a: 1, why: "You can disagree. Just understand the feedback first, then raise it calmly with a reason tied to the standard." },
  commit: "The next time I get a Hold or a tough note, I'll say…"
},
{
  n: 10, track: 2, min: 6,
  title: "Saying No and Delivering Bad News",
  hook: "Clear, kind, and what happens next.",
  scenario: "A staffer asks you to move their spread deadline back a week because they had a busy weekend. You want to be liked and you're tempted to say, \"Sure, no problem.\" But only Fitz can extend a deadline, and the spread is already late.",
  idea: "A clear no, said kindly, is better than a fuzzy yes that falls apart later. Bad news doesn't get better with time. Say it early, say it straight, and say what happens next.",
  tool: { name: "Clear · Kind · Next", steps: [
    ["Clear", "Put the no, or the news, in the first sentence."],
    ["Kind", "Acknowledge how it lands."],
    ["Next", "Offer what you can do, or who can help."]
  ]},
  decide: { prompt: "What do you tell the staffer?", options: [
    { t: "\"Sure, I'll figure it out.\"", r: "You can't extend deadlines, so this promise will break, and the staffer will be in worse shape when it does." },
    { t: "\"I can't extend deadlines. Only Fitz can. I know this week was a lot. Let's look at what you can finish by Friday, and you can ask Fitz if you need more time.\"", r: "Clear, kind and useful. The staffer knows where they stand and has a path forward.", best: true },
    { t: "\"Rules are rules.\"", r: "It's clear but cold, and it offers no path. Expect resentment and no progress." }
  ]},
  check: { q: "Where should the bad news go?", options: ["At the end, after you build up to it", "In the first sentence", "In a group chat so everyone hears at once"], a: 1, why: "Leading with the news respects the person. Burying it makes them anxious and confused." },
  commit: "One no or piece of news I've been putting off, and the first sentence I'll use, is…"
},

/* ---------------- TRACK 3 ---------------- */
{
  n: 11, track: 3, min: 6,
  title: "Delegating",
  hook: "Hand off the task and the decisions that come with it.",
  scenario: "You're an EIC with three spreads to assign, a design review and interview questions to check. You keep doing everything yourself because \"it's faster.\" It's Thursday, and you're behind on all of it.",
  idea: "Delegating isn't dumping work. It's handing off a task and the decisions that go with it, then supporting the person who has it. If you keep every task, your staff never grows and you become the bottleneck.",
  tool: { name: "The Handoff", steps: [
    ["Pick", "Choose the right person: someone who can do it or is ready to learn."],
    ["Outcome", "Explain what done looks like, not just the steps."],
    ["Decisions", "Say what they decide on their own and what needs your OK."],
    ["Check-in", "Set a time to check in before it's due."]
  ]},
  decide: { prompt: "How do you hand off a spread?", options: [
    { t: "Assign it, then redo it yourself if it's not how you'd do it.", r: "Redoing their work tells them it never mattered. They'll stop trying." },
    { t: "Assign it, explain what done looks like, say \"You choose the photos; check with me before final layout,\" and set a Tuesday check-in.", r: "The outcome, the decisions and support are all clear. That's real delegating.", best: true },
    { t: "Post in the group chat: \"Anyone free to help with a spread?\"", r: "No owner, no outcome, no deadline. Expect silence, or a spread nobody really owns." }
  ]},
  check: { q: "What makes delegating different from dumping?", options: ["You hand off the hardest tasks", "You hand off the outcome and decisions, and you support the person", "You never check on it again"], a: 1, why: "Delegating is a handoff with clarity and support. Dumping is just getting rid of work." },
  commit: "One task I'll hand off this week, and to whom, is…"
},
{
  n: 12, track: 3, min: 5,
  title: "Checking In Without Micromanaging",
  hook: "Check-ins should help the work, not watch it.",
  scenario: "You delegated a spread. Over two days you message the staffer five times: \"Done yet?\" \"How's it going?\" \"Can I see it?\" They stop answering.",
  idea: "Too few check-ins and problems hide until the deadline. Too many and people feel like you don't trust them. Agree on the check-ins when you hand off the work, then keep to them.",
  tool: { name: "Planned Check-ins", steps: [
    ["Set them up front", "Agree on when you'll check in when you hand off the task."],
    ["Ask three things", "What's done? What's next? What's in your way?"],
    ["Step back", "Then leave it alone until the next check-in."],
    ["Adjust", "More support for new staff, less for experienced staff."]
  ]},
  decide: { prompt: "Which plan works best?", options: [
    { t: "Message every few hours so nothing slips.", r: "It signals distrust and interrupts their work. Many people slow down when they're watched this closely." },
    { t: "Don't check in at all until the deadline.", r: "If they're stuck, you'll find out when it's too late to help." },
    { t: "At handoff: \"Let's check in Tuesday and Thursday at the start of class.\" At each one, ask what's done, what's next and what's in their way.", r: "Predictable, supportive and respectful. Problems surface early, and the staffer keeps ownership.", best: true }
  ]},
  check: { q: "Which three questions make up a good check-in?", options: ["Why is it late? Who's helping? When's lunch?", "What's done? What's next? What's in your way?", "Is it done? Is it done? Is it done?"], a: 1, why: "These three questions show progress and roadblocks without micromanaging." },
  commit: "For the next task I hand off, my check-in plan is…"
},
{
  n: 13, track: 3, min: 6,
  title: "Leading Your Friends",
  hook: "Fair isn't the same as easy.",
  scenario: "Your best friend is on staff and has missed two mini-deadlines this Sprint. Other staffers notice you haven't said anything. Someone mutters, \"Must be nice to be friends with the editor.\"",
  idea: "If you go easy on friends, you lose everyone else's trust, and staying quiet can hurt your friend's grade too. You can be a friend and an editor. You just have to be clear about which role you're in at the moment.",
  tool: { name: "Name the Hat", steps: [
    ["Say it", "\"I'm talking to you as your editor for a minute.\""],
    ["Same standard", "Use the same words and the same process you'd use with anyone."],
    ["Separate it", "Make it clear this is about the work, not the friendship."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Let it go. They'll catch up, and it's not worth the awkwardness.", r: "The staff sees favoritism, and your friend's grade takes the hit anyway." },
    { t: "Pull them aside: \"Editor hat for a sec. You've missed two mini-deadlines, and I have to log them like anyone else's. What do you need to get back on track?\"", r: "Private, fair and caring. The standard holds, and the friendship is respected.", best: true },
    { t: "Call them out in the group chat so everyone sees you're fair.", r: "It's fair, but it's not kind. It embarrasses your friend and makes everyone nervous." }
  ]},
  check: { q: "What does \"Name the Hat\" mean?", options: ["Wear a staff hat on deadline days", "Say out loud that you're speaking as their editor right now", "Pretend you aren't friends"], a: 1, why: "Naming the role makes the conversation about the work and protects the friendship." },
  commit: "If I need to hold a friend accountable, the first sentence I'll say is…"
},
{
  n: 14, track: 3, min: 6,
  title: "Following Up on Missed Work",
  hook: "Firm, fair and documented.",
  scenario: "A staffer missed their spread deadline, the second time this month. You're annoyed, and you're tempted to let it slide to avoid an awkward conversation.",
  idea: "Following up is part of being fair. Firm means the standard doesn't change. Fair means everyone gets the same process. Documented means it's written down, so nothing depends on memory or mood.",
  tool: { name: "Firm · Fair · Documented", steps: [
    ["Log it", "The reviewer logs every missed spread deadline on the Missed Spread Deadline form. The form notifies no one. It builds one shared log so every scorer sees every miss."],
    ["Talk", "Privately, specifically and calmly: what was due, what's missing, what's next."],
    ["Plan", "Set a new check-in date. Remember: only Fitz can extend a deadline."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Let it slide this once.", r: "It isn't once. Letting it slide is unfair to everyone who made the deadline, and the log won't match reality." },
    { t: "Log it on the Missed Spread Deadline form, talk with the staffer privately, and set a check-in for the next class day.", r: "Firm, fair and documented. The staffer knows where they stand, and every scorer sees the same record.", best: true },
    { t: "Tell the other staffers so they know you're serious.", r: "Sharing someone's miss with staff is embarrassing and unprofessional. Keep it private and on the log." }
  ]},
  check: { q: "What does the Missed Spread Deadline form do?", options: ["Emails the staffer and their parents", "Notifies no one; it builds one shared log of misses", "Extends the deadline automatically"], a: 1, why: "The form only logs misses so all scorers share one record. Only Fitz can extend a deadline." },
  commit: "The next time someone misses a deadline, my three steps will be…"
},
{
  n: 15, track: 3, min: 5,
  title: "What Motivates Each Person",
  hook: "Ask instead of guessing.",
  scenario: "Two staffers have the same assignment. One lights up when you say their photo might be the dominant on a spread. The other shrugs at that, but works hard when they get to pick which event they cover.",
  idea: "People don't all run on the same fuel. Some want recognition, some want choice, some want to get really good at a skill, and some want to feel part of the team. Good leaders ask what motivates each person and use it.",
  tool: { name: "Fuel Check", steps: [
    ["Ask", "\"What part of yearbook do you enjoy most?\" \"What would make this assignment more interesting?\""],
    ["Notice", "Pay attention to what they get excited about."],
    ["Match", "Offer choice, challenge, credit or connection where you can."]
  ]},
  decide: { prompt: "A staffer has been quiet and doing the bare minimum. What do you try first?", options: [
    { t: "Remind them that their grade depends on it.", r: "Pressure might get the minimum, but it rarely sparks real effort." },
    { t: "Ask, \"What part of yearbook do you actually like? Is there an event you'd want to cover?\"", r: "You're finding their fuel. One good question can change how someone shows up.", best: true },
    { t: "Quietly give their assignments to someone else.", r: "The work gets done, but you've written them off, and they'll know it." }
  ]},
  check: { q: "Which is a \"choice\" motivator?", options: ["Getting their name in the credits", "Picking which event to cover", "Being praised in front of staff"], a: 1, why: "Choice is about having a say. Credit and praise are recognition motivators." },
  commit: "One staffer I'll do a Fuel Check with this week is…"
},
{
  n: 16, track: 3, min: 5,
  title: "Recognition That Means Something",
  hook: "Specific beats generic.",
  scenario: "At the end of a Sprint, you post \"Great job everyone!\" in the group chat. Nobody reacts. One staffer stayed late twice to fix a spread that wasn't even theirs.",
  idea: "Generic praise is easy to ignore. Specific recognition tells people what they did, why it mattered and that you noticed. It also shows everyone else what good work looks like.",
  tool: { name: "What · Why · Who Sees", steps: [
    ["What", "Exactly what they did."],
    ["Why", "Why it mattered to the book or the team."],
    ["Who sees", "Say it where it counts: in person, in front of the team or to Fitz."]
  ]},
  decide: { prompt: "Which recognition will land?", options: [
    { t: "\"Thanks for everything, guys!\"", r: "Friendly, but nobody feels personally seen." },
    { t: "\"Ari, you stayed late twice to fix the volleyball spread so it made proofing day. That kept our whole deadline on track. Thank you.\"", r: "What, why and who sees. Ari feels valued, and the whole staff sees what going the extra mile looks like.", best: true },
    { t: "Don't say anything. Doing good work is just the job.", r: "Unnoticed effort fades. People stop going the extra mile when no one notices." }
  ]},
  check: { q: "What does \"Why\" add to recognition?", options: ["It shows how the work mattered to the book or the team", "It explains why you're saying thanks late", "It asks them to do it again"], a: 1, why: "\"Why\" connects their effort to its impact. That's what makes recognition meaningful." },
  commit: "Someone I'll recognize specifically this week, and what I'll say, is…"
},

/* ---------------- TRACK 4 ---------------- */
{
  n: 17, track: 4, min: 5,
  title: "Conflict Is Normal",
  hook: "Work conflict makes the book better. Personal conflict doesn't.",
  scenario: "Two editors disagree about which photo should be the dominant on the homecoming spread. The discussion gets heated. A first-year whispers, \"Are they fighting?\"",
  idea: "Conflict about the work is healthy when it stays about the work. It's how the book gets better. It becomes a problem when it turns personal and becomes about who someone is instead of what's on the page.",
  tool: { name: "Work or Personal?", steps: [
    ["Work conflict", "About choices, standards and process: \"That photo is soft.\""],
    ["Personal conflict", "About character, motives or history: \"You always do this.\""],
    ["Keep it work", "Point to the standard, the reader or the rubric, not the person."]
  ]},
  decide: { prompt: "Which statement keeps the disagreement about the work?", options: [
    { t: "\"You always pick your friends' photos.\"", r: "That's about motives and history. Now it's personal, and nobody will back down." },
    { t: "\"The rubric calls for a dominant with clear faces and action. The faces in this one are in shadow; that one is sharper.\"", r: "Specific, tied to the standard and about the photo, not the person. This is healthy conflict.", best: true },
    { t: "\"Fine, whatever you want.\"", r: "Giving up isn't the same as resolving it. The resentment stays, and the book may get the weaker photo." }
  ]},
  check: { q: "Which one is a work conflict?", options: ["\"You never listen to me.\"", "\"This headline is too long for the space.\"", "\"You think you're better than everyone.\""], a: 1, why: "A headline's length is about the work. The other two are about the person." },
  commit: "The next time I disagree with someone on staff, I'll point to…"
},
{
  n: 18, track: 4, min: 5,
  title: "Catching It Early",
  hook: "Small conversations now prevent big ones later.",
  scenario: "Two staffers on the same spread used to sit together. This week, one moved seats. They only communicate through you, and one rolled their eyes when the other's name came up. Nothing has \"happened\" yet.",
  idea: "Conflict is easiest to fix while it's small. Most blowups give warning signs first. A leader who notices early can have a short, low-stakes conversation instead of a big one later.",
  tool: { name: "Warning Signs", steps: [
    ["Distance", "Moving seats, avoiding each other."],
    ["Go-betweens", "Talking through you instead of to each other."],
    ["Small digs", "Eye rolls, sarcasm, side comments."],
    ["Slipping work", "Shared tasks stall. Act with a quiet check-in with each person."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Wait until something actually happens.", r: "By then it's usually bigger, more public and harder to fix." },
    { t: "Check in privately with each one: \"I've noticed you two aren't talking much. Is everything OK with the spread?\"", r: "Low-key, private and early. You open the door without making it a big deal.", best: true },
    { t: "Announce in class that drama won't be tolerated.", r: "Everyone knows who you mean. It embarrasses them and doesn't solve anything." }
  ]},
  check: { q: "Two staffers keep asking you to pass messages to each other. Which warning sign is that?", options: ["Distance", "Go-betweens", "Slipping work"], a: 1, why: "When people talk through you instead of to each other, something is usually wrong between them." },
  commit: "One warning sign I'll watch for on my team is…"
},
{
  n: 19, track: 4, min: 6,
  title: "The Conversation",
  hook: "What I saw, the impact, what I need.",
  scenario: "A Photo Editor keeps swapping photos on your section's spreads without telling you. Your writers' captions no longer match the photos, and you're tired of fixing it.",
  idea: "When you need to address a problem with someone, stick to facts, explain the impact and ask for what you need. Then the other person doesn't feel attacked, so they can actually hear you.",
  tool: { name: "Saw · Impact · Need", steps: [
    ["Saw", "What you observed. Facts only, the way a camera would record it."],
    ["Impact", "How it affected the work, the team or you."],
    ["Need", "What you're asking for going forward. Then listen."]
  ]},
  decide: { prompt: "What do you say?", options: [
    { t: "\"You're always messing with my spreads.\"", r: "\"Always\" and \"messing with\" are accusations. Expect defensiveness, not change." },
    { t: "\"On the last two spreads, photos were swapped without a note. The captions didn't match, and we lost a day fixing them. Can you message me before you swap a photo?\"", r: "Saw, impact and need, all calm and specific. It's easy for them to say yes.", best: true },
    { t: "Swap the photos back without saying anything.", r: "Now it's a silent tug-of-war, and the real problem never gets addressed." }
  ]},
  check: { q: "Which is a \"Saw\" statement?", options: ["\"You don't respect my section.\"", "\"Two photos were changed Tuesday without a note.\"", "\"You're trying to make me look bad.\""], a: 1, why: "\"Saw\" is facts only, what a camera would record. The others are guesses about motives." },
  commit: "A conversation I need to have, starting with what I saw, is…"
},
{
  n: 20, track: 4, min: 7,
  title: "Mediating Between Two Staffers",
  hook: "Your job isn't to pick a winner.",
  scenario: "Two staffers on the same spread come to you separately. Each says the other isn't pulling their weight, and each wants you to take their side.",
  idea: "As a mediator, your job is to help two people hear each other and agree on what happens next. Stay neutral, keep it about the work, and end with a plan.",
  tool: { name: "The Mediation Map", steps: [
    ["Ground rules", "One person talks at a time. No insults."],
    ["Both sides", "Each one tells their side, and the other repeats it back."],
    ["Shared goal", "The spread done right, on time."],
    ["Plan", "Agree on who does what, by when."],
    ["Follow up", "Check in on the plan in a few days."]
  ]},
  decide: { prompt: "How do you handle it?", options: [
    { t: "Hear each side separately, decide who's right and tell them.", r: "One person walks away feeling like they lost, and the working relationship gets worse." },
    { t: "Bring them together, set ground rules, have each repeat back the other's view, then split the tasks with dates.", r: "Both feel heard, and both own the plan. That's mediation.", best: true },
    { t: "Tell them to work it out themselves.", r: "If they could, they wouldn't have come to you. The spread suffers while they don't speak." }
  ]},
  check: { q: "Why have each person repeat back the other's side?", options: ["To catch them in a lie", "It proves they listened, and that lowers defensiveness", "It makes the meeting longer"], a: 1, why: "When people feel heard, they stop defending and start solving." },
  commit: "If two staffers bring me a conflict, my first step will be…"
},
{
  n: 21, track: 4, min: 6,
  title: "When to Bring It to Fitz",
  hook: "Knowing your limits is part of leading.",
  scenario: "While you're mediating, a staffer tells you another student has been sending them mean messages outside of class, and they don't want to come to yearbook anymore.",
  idea: "Student leaders handle a lot, but not everything. Some situations belong with an adult right away. Bringing them to Fitz isn't failing as a leader. It is leading.",
  tool: { name: "Bring It to Fitz", steps: [
    ["Right away", "Anyone's safety. Bullying, harassment or threats. Someone hurting themselves or talking about it. Anything you were told that worries you."],
    ["Not your call", "Grades and deadline extensions. Only Fitz can extend a deadline."],
    ["After you've tried", "A work conflict that keeps going after you've used Saw · Impact · Need or mediation."]
  ]},
  decide: { prompt: "What do you say to the staffer?", options: [
    { t: "\"I promise I won't tell anyone.\"", r: "Never promise secrecy about something like this. It may keep them from getting real help, and it's not a promise you can keep." },
    { t: "\"Thank you for telling me. Fitz needs to know so you can get real help. Want to go talk to Fitz together right now, or right after class?\"", r: "You take them seriously, you're honest about what happens next, and you stay with them. That's exactly right.", best: true },
    { t: "Message the other student yourself and tell them to stop.", r: "This could make things worse for the staffer and isn't yours to handle. Bring it to Fitz." }
  ]},
  check: { q: "Which one goes to Fitz right away?", options: ["Two editors disagree about a font", "A staffer says someone is threatening them", "A staffer is behind on captions"], a: 1, why: "Safety, threats and harassment always go to an adult right away. The others are everyday staff work." },
  commit: "If something like this ever comes up, the first thing I'll say is…"
},

/* ---------------- TRACK 5 ---------------- */
{
  n: 22, track: 5, min: 5,
  title: "Don't Take It Personally",
  hook: "Separate the person from the behavior.",
  scenario: "A staffer ignores your feedback for the second time and says, \"Whatever, it's fine.\" You start thinking, \"They don't respect me.\"",
  idea: "Most of what people do is about their own day, stress or situation, not about you. When you separate the person from the behavior, you can deal with the behavior without carrying a grudge.",
  tool: { name: "Behavior, Not Person", steps: [
    ["Name the behavior", "\"The feedback wasn't used.\""],
    ["Drop the label", "Not \"lazy,\" not \"disrespectful.\" Labels make it personal."],
    ["Address the facts", "Talk about what happened and what's next."],
    ["Leave their worth out of it", "This is about one piece of work."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Decide they're disrespectful and stop giving them good assignments.", r: "Now it's personal on your side too, and they'll feel it. The problem grows." },
    { t: "Say, \"The headline fix from Tuesday is still in there. What's getting in the way?\"", r: "Behavior, not person. You stay calm and open the door to the real reason.", best: true },
    { t: "Vent about them to other staffers.", r: "It feels better for a minute, then spreads drama and gets back to them." }
  ]},
  check: { q: "Which is a behavior, not a label?", options: ["\"They're lazy.\"", "\"They didn't make the headline fix.\"", "\"They have a bad attitude.\""], a: 1, why: "A behavior is something you can see and describe. Labels are judgments about the person." },
  commit: "The next time I feel disrespected, I'll describe the behavior as…"
},
{
  n: 23, track: 5, min: 5,
  title: "The Story You Tell Yourself",
  hook: "Check your assumptions before you act on them.",
  scenario: "You post a question in the editors' group chat. Everyone has read it. Nobody answers for three hours. You decide the other editors are leaving you out on purpose.",
  idea: "When we don't know why someone did something, our brain fills in the gap with a story, and the story is usually worse than the truth. Check the story before you act on it.",
  tool: { name: "Facts vs. Story", steps: [
    ["Facts", "What a camera would record: \"Read at 2:14. No reply.\""],
    ["Story", "What you decided it means: \"They're ignoring me.\""],
    ["Other stories", "Come up with two other explanations: in class, busy, thought someone else answered."],
    ["Check", "Ask before you act."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Leave the group chat.", r: "You've acted on a story you never checked, and created a real problem." },
    { t: "The next day, in person: \"Did you see my question about the deadline? I still need an answer.\"", r: "Simple and calm. Usually you learn there was a boring explanation.", best: true },
    { t: "Post, \"Guess nobody cares.\"", r: "Passive-aggressive messages make people defensive and still don't get your question answered." }
  ]},
  check: { q: "Which is a fact, not a story?", options: ["\"They're leaving me out.\"", "\"Read at 2:14, no reply.\"", "\"They don't like me.\""], a: 1, why: "Facts are what a camera would record. The others are interpretations." },
  commit: "A story I've been telling myself that I'll check this week is…"
},
{
  n: 24, track: 5, min: 7,
  title: "Letting Go of an Offense",
  hook: "Releasing it isn't excusing it.",
  scenario: "Last month, another editor made fun of your design in front of the staff. They never apologized. You still think about it every time you see them, and you've started skipping their questions in the group chat.",
  idea: "Holding onto an offense keeps you stuck in that moment, and it leaks into the work. Letting go is a decision to stop carrying it. It doesn't mean what happened was OK, and it doesn't mean you have to be close. It means it stops running your choices.",
  tool: { name: "Release, Don't Excuse", steps: [
    ["Name it", "What happened, and how it felt."],
    ["Decide", "What do I want: an apology, a boundary or just peace?"],
    ["Act", "Say something once using Saw · Impact · Need, or choose to release it."],
    ["Release", "When it comes back up, remind yourself: \"I already decided.\""],
    ["Stay professional", "Treat them like any other editor either way."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Keep ignoring their messages until they apologize.", r: "The book suffers, and you're still carrying it. Waiting for an apology gives them control of your peace." },
    { t: "Tell them once: \"When you joked about my design in front of everyone, it embarrassed me. I'd rather get feedback one-on-one.\" Then answer their questions like any other editor's.", r: "You named it, set a boundary and chose to move on. That's letting go without pretending it was fine.", best: true },
    { t: "Get back at them by critiquing their spread in front of staff.", r: "Now there are two offenses, and the staff is watching a feud." }
  ]},
  check: { q: "What does letting go mean?", options: ["Pretending it never happened", "Deciding it no longer controls your choices, without saying it was OK", "Becoming best friends again"], a: 1, why: "Letting go is about your freedom. It doesn't excuse what happened, and it doesn't require closeness." },
  commit: "Something I'm ready to release, or to address once and then release, is…"
},
{
  n: 25, track: 5, min: 5,
  title: "Repairing a Relationship",
  hook: "Every leader gets it wrong sometimes. Repair is what counts.",
  scenario: "In a stressful moment before proofing day, you snapped at a staffer: \"Just do it right for once.\" They've been quiet around you ever since.",
  idea: "Every leader damages a relationship sometimes. What matters is whether you repair it. A real repair is specific, takes responsibility and shows change over time.",
  tool: { name: "Repair in Three", steps: [
    ["Name it", "\"Monday I said, 'Just do it right for once.'\""],
    ["Own the impact", "\"That was unfair, and it probably felt awful.\""],
    ["Change", "\"When I'm stressed, I'll step away before I respond.\" Then actually do it."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Wait for it to blow over.", r: "It might fade, but it won't heal. The staffer will stay guarded around you." },
    { t: "\"Sorry if you were offended.\"", r: "\"If you were offended\" puts it on them. It's not a real apology." },
    { t: "\"Monday I told you to 'just do it right for once.' That was unfair, and it probably felt awful. When I'm stressed, I'm going to step away before I respond.\"", r: "Specific, owned and forward-looking. Now keep the promise. That's the repair.", best: true }
  ]},
  check: { q: "What makes \"Sorry if you were offended\" a weak apology?", options: ["It's too short", "It puts the problem on the other person's reaction", "It uses the word sorry"], a: 1, why: "A real repair owns what you did, not how they took it." },
  commit: "A relationship I need to repair, and what I'll name, is…"
},
{
  n: 26, track: 5, min: 6,
  title: "Handling Pushback",
  hook: "Stay open, stay steady.",
  scenario: "You chose the photo for the sports section opener. A staffer says loudly, \"That's a terrible choice. Nobody asked us.\" A few others nod.",
  idea: "Pushback isn't a threat to your authority. How you respond is what builds or loses respect. Listen for anything useful, explain your reasoning, and hold steady if the decision still holds.",
  tool: { name: "Hear · Explain · Hold or Adjust", steps: [
    ["Hear", "\"Tell me what you'd change, and why.\""],
    ["Explain", "Share your reasoning, tied to the standard or the reader."],
    ["Hold or adjust", "New information? Adjust. No new information? Hold, calmly."],
    ["Take it private", "If it's getting public, move it to after class."]
  ]},
  decide: { prompt: "What do you say?", options: [
    { t: "\"I'm the editor. It's my call.\"", r: "True, maybe, but it ends the conversation and loses the room." },
    { t: "\"Fair question. Show me what you'd pick and why. I'll look at it after class. I chose this one because it has the clearest action and faces.\"", r: "You listen, explain and stay steady. People respect a leader who can do all three.", best: true },
    { t: "Switch the photo right away to calm everyone down.", r: "Now everyone knows loud complaints change decisions. Expect more of them." }
  ]},
  check: { q: "When should you change a decision after pushback?", options: ["When enough people complain", "When someone gives you new information that shows a better option", "Never"], a: 1, why: "Adjust for better information, not for volume." },
  commit: "The next time someone pushes back on my decision, I'll start with…"
},
{
  n: 27, track: 5, min: 5,
  title: "Boundaries and Stress",
  hook: "You can't pour from an empty cup.",
  scenario: "It's the week of a final deadline. Staffers message you at 11 p.m. with questions. You answer every one. You're behind on your own spread, sleeping less and snapping at people.",
  idea: "You can't lead well when you're running on empty. Boundaries aren't selfish. They keep you able to show up for your team. If stress ever feels like too much, that's a signal to talk to Fitz or a school counselor, not to push harder alone.",
  tool: { name: "Protect the Tank", steps: [
    ["Set hours", "Tell staff when you answer messages."],
    ["Share the load", "Delegate and ask for help early."],
    ["Recharge", "Sleep, food and one thing you enjoy."],
    ["Speak up", "Tell Fitz when it's too much."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Keep answering every message, any time. That's what a good editor does.", r: "That's a path to burnout, and a burned-out editor helps no one." },
    { t: "Post: \"I answer yearbook messages until 8 p.m. Anything later, I'll answer first thing in class.\" Then ask Fitz to help you sort your deadline list.", r: "A clear boundary plus asking for help. You protect yourself and still show up for your team.", best: true },
    { t: "Stop answering anyone and mute the chat.", r: "Total silence leaves staff stuck. A boundary is a limit, not a disappearance." }
  ]},
  check: { q: "What's the difference between a boundary and disappearing?", options: ["There isn't one", "A boundary tells people when you're available; disappearing leaves them guessing", "Boundaries are only for adults"], a: 1, why: "A boundary is clear and communicated. Disappearing isn't." },
  commit: "One boundary I'll set, and how I'll tell my staff, is…"
},

/* ---------------- TRACK 6 ---------------- */
{
  n: 28, track: 6, min: 5,
  title: "Building Trust",
  hook: "Make it safe to try, ask and make mistakes.",
  scenario: "A new staffer is afraid to submit their first spread. The last time someone's work was reviewed, an editor laughed at it in class.",
  idea: "Trust is the feeling that it's safe to try, ask questions and make mistakes here. Teams with trust ask questions sooner, catch errors earlier and make better books.",
  tool: { name: "Safe to Try", steps: [
    ["Model it", "Ask questions out loud yourself: \"I don't know. Let's find out.\""],
    ["Critique private, praise public", "Fixes one-on-one. Wins in front of everyone."],
    ["Mistakes", "Respond with \"What happened? What's next?\""],
    ["Never mock", "Not a spread, not a photo, not a question."]
  ]},
  decide: { prompt: "You overhear an editor mocking a staffer's spread. What do you do?", options: [
    { t: "Laugh along. It's just a joke.", r: "Every staffer in earshot just learned it isn't safe to submit work." },
    { t: "Talk to that editor privately: \"Mocking spreads makes people afraid to turn work in. Feedback goes one-on-one.\"", r: "You protect the staff and coach the editor without embarrassing them. That's how trust gets built.", best: true },
    { t: "Ignore it. It's not your business.", r: "As a leader, it is. Silence tells everyone it's acceptable." }
  ]},
  check: { q: "Where should critique happen?", options: ["In front of the whole staff", "One-on-one", "In the group chat"], a: 1, why: "Critique in private, praise in public." },
  commit: "One thing I'll do this week to make it safer to try is…"
},
{
  n: 29, track: 6, min: 5,
  title: "Belonging",
  hook: "Notice who's on the edge and pull them in.",
  scenario: "During work time, the same group of returning staffers sits together and jokes around. Two first-years sit alone at the computers and haven't asked anyone a question in two weeks.",
  idea: "People do their best work when they feel like they belong. Leaders notice who's on the edge and pull them in, with small, steady invitations rather than big speeches.",
  tool: { name: "Pull Them In", steps: [
    ["Know them", "Learn names and one thing about each person."],
    ["Pair up", "Pair new staff with a returner on a real task."],
    ["Invite input", "\"What do you think?\""],
    ["Notice silence", "Ask the people who haven't spoken."]
  ]},
  decide: { prompt: "What do you do about the two first-years?", options: [
    { t: "Leave them alone. They'll ask if they need something.", r: "New staffers often won't ask. Silence usually means \"I don't feel like I belong yet.\"" },
    { t: "Pair each one with a returner on a real task this week, and ask for their opinion in the next staff huddle.", r: "Small, real invitations. They get a person to ask and a voice on the team.", best: true },
    { t: "Announce, \"Everyone needs to include the new people!\"", r: "Well meant, but it puts them on the spot and rarely changes behavior." }
  ]},
  check: { q: "Which action builds belonging most?", options: ["A speech about teamwork", "Pairing a new staffer with a returner on a real task", "A team T-shirt"], a: 1, why: "Belonging grows through real connection and real work together." },
  commit: "One person I'll pull in this week, and how, is…"
},
{
  n: 30, track: 6, min: 5,
  title: "Running a Short Meeting or Debrief",
  hook: "Purpose, agenda, actions.",
  scenario: "You run a 10-minute staff debrief after proofing day. It turns into 25 minutes of side conversations, nobody writes anything down, and the next day nobody remembers what was decided.",
  idea: "A good meeting has a purpose and a time limit, and it ends with who does what by when. Short and focused beats long and loose. If you have a Debrief Cue Card, use it.",
  tool: { name: "Purpose · Agenda · Actions", steps: [
    ["Purpose", "One sentence: why we're meeting."],
    ["Agenda", "Two or three items, each with a time."],
    ["Actions", "End with who, what and when, written where everyone can see it."]
  ]},
  decide: { prompt: "What's the best way to end the debrief?", options: [
    { t: "\"OK, good meeting, everyone!\"", r: "Friendly, but nobody leaves knowing what to do." },
    { t: "Read back the actions: \"Jordan fixes captions by Wednesday. Sam reshoots by Thursday. I check both Friday.\"", r: "Everyone leaves knowing who does what and when. That's a meeting that worked.", best: true },
    { t: "Let it run until people stop talking.", r: "Long meetings lose people. End on time, with actions." }
  ]},
  check: { q: "What should every meeting end with?", options: ["A snack", "Who does what, by when", "A vote"], a: 1, why: "Without actions, decisions disappear by the next day." },
  commit: "For my next meeting or debrief, my one-sentence purpose is…"
},
{
  n: 31, track: 6, min: 6,
  title: "Making a Call and Standing By It",
  hook: "Gather input, then decide.",
  scenario: "Proofing day is tomorrow. Two editors can't agree on whether to cut a sidebar to make room for a photo. Everyone's looking at you, the EIC. You're worried about upsetting someone.",
  idea: "Leaders gather input, then decide. Waiting for everyone to agree often means the deadline decides for you. Once you decide, explain it, own it and support it. Revisit it only if new information comes up.",
  tool: { name: "Input · Decide · Commit", steps: [
    ["Input", "Hear each view, briefly."],
    ["Decide", "Choose based on the standard, the reader and the deadline."],
    ["Explain", "Give one or two sentences of why."],
    ["Commit", "Back the decision, even if it wasn't everyone's favorite."]
  ]},
  decide: { prompt: "What do you do?", options: [
    { t: "Let them keep debating until someone gives in.", r: "The deadline decides for you, and the loudest person wins." },
    { t: "Hear both for two minutes, then: \"We're keeping the photo and cutting the sidebar. The photo tells the story better, and we need this done today. Thanks for both views.\"", r: "Input, decision, reason and respect. People can disagree and still follow a clear call.", best: true },
    { t: "Ask the whole staff to vote.", r: "Votes can feel fair, but this is an editor's call, and it splits the staff into winners and losers." }
  ]},
  check: { q: "When should you revisit a decision?", options: ["When someone is unhappy", "When new information comes up", "Every day"], a: 1, why: "Stand by your call unless something new changes the picture." },
  commit: "A decision I've been avoiding that I'll make this week is…"
},
{
  n: 32, track: 6, min: 6,
  title: "Leaving It Better",
  hook: "Train the leader who comes after you.",
  scenario: "It's spring. You're a senior editor, and next year's editor starts in August. Everything you know about running your section lives in your head.",
  idea: "The final test of a leader is how well the team runs without them. Training your replacement and writing down what you know is the last thing you'll give the book.",
  tool: { name: "Hand It Off", steps: [
    ["Write it down", "Your weekly routine, what you check and when, and tips you wish you'd known."],
    ["Show, then shadow", "Do it while they watch, then let them do it while you watch."],
    ["Let them lead", "Step back before you leave, so they lead while you're still around to help."],
    ["Pass on the why", "Explain why things are done, not just what's done."]
  ]},
  decide: { prompt: "What's the best way to start?", options: [
    { t: "Wait until the last week of school and give them your notes.", r: "Notes without practice don't stick, and there's no time left for questions." },
    { t: "Have them run the next debrief while you coach afterward, and start a one-page \"What I wish I knew\" for your role.", r: "Real practice with support, plus written knowledge that lasts. That's a real handoff.", best: true },
    { t: "Keep doing it yourself so the book stays strong this year.", r: "This year's book stays strong, and next year's starts from zero." }
  ]},
  check: { q: "What's the final test of a leader?", options: ["How many awards the book wins", "How well the team runs without them", "How busy they were"], a: 1, why: "A leader's work lasts when the team can carry it forward." },
  commit: "The first thing I'll write down for the next editor is…"
}
];
