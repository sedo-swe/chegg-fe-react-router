function Clock() {
    const cHour = new Date().getHours();
    if (cHour < 12)
        return <div>Good Morning!</div>;
    else if (12 <= cHour && cHour < 18)
        return <div>Good Afternoon!</div>;
    else
        return <div>Good Evening!</div>;
}

export default Clock;